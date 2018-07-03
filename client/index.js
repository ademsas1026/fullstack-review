import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, Switch} from 'react-router-dom'
import history from './history'
import { Sidebar, AllBooks, AllSauces, Home } from './components'

ReactDOM.render(
    <Router history={history}>
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar />
        </div>
        <div className="col-xs-10" id="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/books" component={AllBooks} />
            <Route exact path="/sauces" component={AllSauces} />
          </Switch>
        </div>
      </div>
    </Router>,
  document.getElementById('app')
)
