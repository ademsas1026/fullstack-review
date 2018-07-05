import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, Switch} from 'react-router-dom'
import history from './history'
import { Sidebar, Home } from './components'

ReactDOM.render(
    <Router history={history}>
      <div >
        <Sidebar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>,
  document.getElementById('app')
)
