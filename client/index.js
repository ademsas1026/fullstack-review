import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, Switch} from 'react-router-dom'
import history from './history'
import { Sidebar, Home, AllBooks } from './components'

ReactDOM.render(
    <Router history={history}>
      <div >
        <Sidebar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/books" component={AllBooks} />
          </Switch>
        </div>
      </div>
    </Router>,
  document.getElementById('app')
)
