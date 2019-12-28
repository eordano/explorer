import { Center, Container, Dropdown, Filter, Grid, HeaderMenu, Loader, Radio, Table, TableBody } from 'decentraland-ui'
import React, { useMemo, useState } from 'react'
import { usePromise } from '../hooks/usePromise'
import { CatalogAsPromise } from '../kernel/wearables'
import { store } from '../kernel/store'

export type CollectionName = string
export type CategoryName = string
export type WearableId = string
export type Wearable = any
export type Catalog = Record<CollectionName, Record<CategoryName, Record<WearableId, Wearable>>>

function flatten<T>(array: T[][]) {
  return array.reduce(($$, _) => [...$$, ..._], [])
}
function zip<R extends number | string | symbol, T>(thing: [R, T][]) {
  return thing.reduce(
    (cumm: Record<R, T>, value: [R, T]) => {
      cumm[value[0]] = value[1]
      return cumm
    },
    {} as any
  )
}

function processData(data: any) {
  const processed = data.map((item: any) => {
    const id: string = item.id
    const type: string = item.type
    const collection: string = item.id.split('/')[2]
    const sub: string = item.id.split('/')[3]
    const category: string = item.category
    const tags: string[] = item.tags
    const exclusive: boolean = tags.includes('exclusive')
    const baseUrl: string = item.baseUrl
    const i18n: { code: string; text: string }[] = item.i18n
    const thumbnail: string = item.thumbnail
    const replaces: string[] = item.replaces
    const hides: string[] = item.hides

    const availableFor: string[] = flatten(item.representations.map((_: any) => _.bodyShapes))
    const representations: Record<string, any[]> = zip(item.representations.map((_: any) => [_.bodyShapes[0], _]))

    return {
      id,
      type,
      category,
      sub,
      exclusive,
      collection,
      tags,
      baseUrl,
      i18n,
      thumbnail,
      replaces,
      hides,
      availableFor,
      representations
    }
  })
  return processed
}
export function bySub(data: any) {
  return data.reduce(
    (cumm, item) => ({
      ...cumm,
      [item.category]: {
        ...(cumm[item.category] || {}),
        [item.sub]: item
      }
    }),
    {} as any
  )
}

function getCollectionFromPath(pathname: string) {
  const collectionsMapping = {
    "basic-wearables": "base-avatars",
    "exclusive-masks": "base-exclusive"
  }
  const parts = pathname.split("/");
  return collectionsMapping[parts[parts.length - 1]];
}

export const Assets = (props) => {
  const collection = getCollectionFromPath(props.pathname);
  
  if(!collection) {
    return <h1>Collection not found for {props.pathname}</h1>
  }

  const { error, isLoading, result } = usePromise(() => CatalogAsPromise(store)(collection), [collection])

  if (error) {
    return <h1>Error fetching: {JSON.stringify(error)}</h1>
  }
  const categories = useMemo(() => {
    if (!result) {
      return
    }
    return processData(result)
  }, [result])

  const [showBodyShapes, setShowBodyShapes] = useState(false)
  const [showFaceAttributes, setShowFaceAttributes] = useState(false)
  const [onlyExclusives, setOnlyExclusives] = useState(false)
  const [activeCategory, setActiveCategory] = useState(undefined)

  const faceAttributes = ['eyes', 'mouth', 'eyebrows', 'facial_hair', 'hair', 'mouth']
  const allCategories = useMemo(() => {
    if (!result) {
      return
    }
    const dict: any = {}
    result.forEach(_ => (dict[_.category] = false))
    return dict
  }, [result])

  const filtered = useMemo(() => {
    if (!result) {
      return
    }
    return categories
      .filter(_ => showBodyShapes || _.category !== 'body_shape')
      .filter(_ => !activeCategory || activeCategory === _.category)
      .filter(_ => !onlyExclusives || _.exclusive)
      .filter(_ => showFaceAttributes || !faceAttributes.includes(_.category))
  }, [result, showBodyShapes, showFaceAttributes, onlyExclusives, activeCategory])

  return (
    <Container>
      {isLoading ? (
        <Center>
          <Loader />
        </Center>
      ) : (
        <Grid>
          <Grid.Column>
            <h2>Basic Wearables</h2>
            <HeaderMenu>
              <HeaderMenu.Left>
                <Filter active={showBodyShapes}>
                  <span onClick={() => setShowBodyShapes(!showBodyShapes)}>include body shapes</span>{' '}
                </Filter>
                <Filter active={showFaceAttributes}>
                  <span onClick={() => setShowFaceAttributes(!showFaceAttributes)}>include Head Attributes</span>{' '}
                </Filter>
              </HeaderMenu.Left>
              <HeaderMenu.Right>
                <span className="secondary-text" style={{ marginRight: 8 }}>
                  Only exclusives
                </span>
                <Radio
                  toggle
                  style={{ padding: 5, marginRight: 8 }}
                  onClick={() => setOnlyExclusives(!onlyExclusives)}
                />
                {allCategories && (
                  <Dropdown text={activeCategory ? 'Showing: ' + activeCategory : 'Filter by...'} direction="left">
                    <Dropdown.Menu>
                      <Dropdown.Item
                        active={!activeCategory}
                        key={'All'}
                        onClick={() => setActiveCategory(undefined)}
                        text="Show all"
                      />
                      {Object.keys(allCategories)
                        .filter(
                          _ =>
                            (_ !== 'body_shape' || showBodyShapes) &&
                            (showFaceAttributes || !faceAttributes.includes(_))
                        )
                        .map(category => {
                          return (
                            <Dropdown.Item
                              active={activeCategory && activeCategory === category}
                              key={category}
                              onClick={() => setActiveCategory(category)}
                              text={category}
                            />
                          )
                        })}
                    </Dropdown.Menu>
                  </Dropdown>
                )}
              </HeaderMenu.Right>
            </HeaderMenu>
            <Table>
              <TableBody>
                {filtered &&
                  filtered.map(item => {
                    const name = item.i18n.filter(_ => _.code === 'en')[0].text
                    return (
                      <Table.Row
                        key={item.id}
                        style={{ cursor: 'pointer' }}
                        onClick={() => history.pushState({}, 'Assetname', '/assets/detail/' + item.id.substr(6))}
                      >
                        <Table.Cell style={{ textAlign: 'center' }}>
                          <img src={`${item.baseUrl}${item.thumbnail}`} alt={name} width="36px" height="36px" />
                        </Table.Cell>
                        <Table.Cell>{name}</Table.Cell>
                        <Table.Cell>{JSON.stringify(item.category)}</Table.Cell>
                        <Table.Cell>{JSON.stringify(item.collection)}</Table.Cell>
                      </Table.Row>
                    )
                  })}
              </TableBody>
            </Table>
          </Grid.Column>
        </Grid>
      )}
    </Container>
  )
}