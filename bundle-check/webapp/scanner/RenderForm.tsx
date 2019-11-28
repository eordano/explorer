import { Button, Field, Form, Grid } from 'decentraland-ui'
import React from 'react'
import { FormOptions } from './types'

export function RenderForm(
  props: FormOptions & {
    disabled?: boolean
    setOptions?: Function
    start?: Function
  }
) {
  const { disabled, setOptions, start, ...options } = props
  return (
    <Form onSubmit={() => start()}>
      <Field
        name="content-server"
        value={options.contentServer}
        disabled={disabled}
        onChange={contentServer => setOptions({ ...options, contentServer: contentServer.target.value })}
        placeholder=""
        label="Content Server:"
      />
      <Field
        name="asset-bundle-server"
        value={options.assetBundleServer}
        placeholder=""
        disabled={disabled}
        onChange={assetBundleServer => setOptions({ ...options, assetBundleServer: assetBundleServer.target.value })}
        label="Asset Bundle Server:"
      />
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Field
              type="number"
              onChange={x => setOptions({ ...options, x: parseInt(x.target.value, 10) })}
              name="startX"
              value={options.x}
              placeholder=""
              disabled={disabled}
              label="X Start:"
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <Field
              type="number"
              onChange={y => setOptions({ ...options, y: parseInt(y.target.value, 10) })}
              name="startY"
              value={options.y}
              placeholder=""
              disabled={disabled}
              label="Y Start:"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <Field
              fluid
              type="number"
              onChange={width => setOptions({ ...options, width: parseInt(width.target.value, 10) })}
              value={options.width}
              name="width"
              placeholder=""
              disabled={disabled}
              label="Rectangle width:"
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <Field
              onChange={height => setOptions({ ...options, height: parseInt(height.target.value, 10) })}
              value={options.height}
              type="number"
              name="height"
              placeholder=""
              disabled={disabled}
              label="Rectangle height:"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <p style={{ textAlign: 'center' }}>
        <Button disabled={disabled} primary>
          Start Scan
        </Button>
      </p>
    </Form>
  )
}
