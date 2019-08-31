import * as React from 'react'
import { SystemsState } from '~/modules/systems'
import { LinkReactComponent } from '~/components/Reusable/LinkReactComponent'
import { Push } from 'connected-react-router'

const READY = 'Started'
const ERRORED = 'Errored'
const LOADING = 'Loading'

export default class SystemNavComponent extends React.Component<{
  current: string
  tryStart: Function
  push: Push
  systems: SystemsState
}> {
  render() {
    return (
      <div className='ui secondary fluid stackable menu' style={{ flexFlow: 'row wrap' }}>
        <a
          className={'link item' + (['/', '/status'].includes(this.props.current) ? ' active' : '')}
          key='console'
          href={`/status`}
        >
          Console
        </a>
        {Object.keys(this.props.systems.status).map(state => {
          const status =
            this.props.systems.status[state] === LOADING
              ? 'yellow'
              : this.props.systems.status[state] === READY
              ? 'green'
              : this.props.systems.status[state] === ERRORED
              ? 'red'
              : 'grey'
          const url = `/status/${state}`
          return (
            <LinkReactComponent
              push={this.props.push}
              className={'link item' + (this.props.current === url ? ' active' : '')}
              key={state}
              href={url}
            >
              {state}
              <a className={`ui empty circular label ${status}`}></a>
            </LinkReactComponent>
          )
        })}
      </div>
    )
  }
}