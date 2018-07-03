import React from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () =>  {
    return (
      <div id="sidebar">å
        <h1 id="sidebar-title"> 
          <Link to="/">SL</Link>
        </h1>
        <h2>
          <Link to="/books">Books</Link>
        </h2>
        <br />
        <br />
        <h2>
          <Link to="/sauces">Sauces*</Link>
        </h2>
        <h3>*caution: spicy</h3>
      </div>
    )

}

export default Sidebar;
