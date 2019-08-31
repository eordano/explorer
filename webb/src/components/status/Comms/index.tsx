import * as React from 'react'
import { Grid, Segment } from 'decentraland-ui'
import { BuildConnectedVisualizer } from '../../Reusable/BuildConnectedVisualizer'

export default class Comms extends React.PureComponent {
  render() {
    const Inspector = BuildConnectedVisualizer('Comms')
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={6}></Grid.Column>
          <Grid.Column width={10}>
            <Segment>Placeholder logs</Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>{<Inspector />}</Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}