import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, Switch} from 'react-router-dom'
import history from './history'
import { Sidebar, AllBooks, AllSauces, Home, Sauce, Book } from './components'

import './socket'

const styles = {
  everything: {
    display: 'flex'
  }
}
ReactDOM.render(
    <Router history={history}>
      <div style={styles.everything}>
        <Sidebar />
        <div>
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
