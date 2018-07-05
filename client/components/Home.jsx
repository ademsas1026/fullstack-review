import React from 'react'
// import { Typography } from '@material-ui/core'

const Home = (props) => {
    console.log('this is match', props.match)
    return (
      <div id="home">
        <h1>Spicy Libros</h1>
        <h3>A site for readers and eaters</h3>
      </div>
    )
}

export default Home;
