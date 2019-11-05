import { Button, Center, Grid, Header, HeaderMenu, Hero, Icon, Page, Segment } from 'decentraland-ui'
import React from 'react'

export function SceneDetail(props: any) {
  return (
    <Page>
      <Hero>
        <Center>
          <h2>Scene: "Maze" at 5, -15</h2>
        </Center>
      </Hero>
      <Grid>
        <Grid.Column width={6}>
          <Segment>
            <HeaderMenu>
              <HeaderMenu.Left>
                <Header>Scene Status</Header>
              </HeaderMenu.Left>
              <HeaderMenu.Right>
                <Header>
                  <Button basic>
                    Reload &nbsp; <Icon name="refresh" />
                  </Button>
                </Header>
              </HeaderMenu.Right>
            </HeaderMenu>
            <p>Initialized</p>
            <p>Downloaded assets</p>
            <p>Current limits</p>
          </Segment>
          <Segment>
            <h4>Players on this scene</h4>
            <p>Qmfw3ef: 12345135.json</p>
          </Segment>
          <Segment>
            <h4>Mappings</h4>
            <p>Qmfw3ef: 12345135.json</p>
          </Segment>
          <Segment>
            <h4>Networked Scene events</h4>
            <p>Qmfw3ef: 12345135.json</p>
          </Segment>
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment>
            <HeaderMenu>
              <HeaderMenu.Left>
                <Header>EC Tree</Header>
              </HeaderMenu.Left>
              <HeaderMenu.Right>
                <Header>
                  <Button primary size='small'>
                    Render <Icon name="chevron right" />
                  </Button>
                </Header>
              </HeaderMenu.Right>
            </HeaderMenu>
            <ul>
              <li>
                Element 43254-f21231
                <ul>
                  <li>
                    Component: Transform
                    <ul>
                      <li>Position: 23,43,1</li>
                      <li>Scale: 23,43,1</li>
                      <li>Rotation: 23,43,1</li>
                    </ul>
                  </li>
                  <li>
                    Children:
                    <ul>
                      <li>Element 43254-f21231</li>
                      <li>Element 43254-f21231</li>
                      <li>Element 43254-f21231</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </Segment>
          <Segment>
            <Header>Running Systems</Header>
            <ul>
              <li>EC Synchronization</li>
              <li>Rotation</li>
            </ul>
          </Segment>
          <Segment>
            <Header>Event Listeners</Header>
            <ul>
              <li>OnClick</li>
              <li>Ethereum</li>
            </ul>
          </Segment>
        </Grid.Column>
      </Grid>
    </Page>
  )
}
