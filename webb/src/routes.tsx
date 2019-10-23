import { ConnectedRouter } from 'connected-react-router'
import * as React from 'react'
import { Route, Switch } from 'react-router'
import { Navbar } from './components/navbar/index'
import { Status } from './components/status/StatusFrame/index'
import { Container } from './components/liteui/dcl'

export const Routes = (
  <>
    <ConnectedRouter history={{} as any}>
      <>
        <Container>
          <Navbar />
        </Container>
        <Switch>
          <Route path="/status" component={Status} />
          <Route path="/status/*" component={Status} />

          <Route component={Status} />
        </Switch>
      </>
    </ConnectedRouter>
  </>
)
