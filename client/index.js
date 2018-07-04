import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, Switch} from 'react-router-dom'
import history from './history'
import { Sidebar, AllBooks, AllSauces, Home, Sauce, Book } from './components'

ReactDOM.render(
    <Router history={history}>
      <div id="main" className="container-fluid">
        <Sidebar />
        <div className="col-xs-10" id="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/books" component={AllBooks} />
            <Route exact path="/sauces" component={AllSauces} />
            <Route exact path="/books/:bookId" component={Book} />
            <Route exact path="/sauces/:sauceId" component={Sauce} />
          </Switch>
        </div>
      </div>
    </Router>,
  document.getElementById('app')
)
