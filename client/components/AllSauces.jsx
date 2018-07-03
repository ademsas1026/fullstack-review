import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SingleSauce from './SingleSauce.jsx'

export default class AllBooks extends Component {
  constructor(){
    super();
    this.state = {
      sauces: [],
      selectedSauce: {}
    }
  }

  async componentDidMount(){
    try {
      const res = await axios.get('/api/sauces')
      const sauces = res.data
      this.setState({ sauces })
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    const { sauces } = this.state
    console.log('rendering all sauces component')
    return (
      <div id="items">
        { sauces.length && sauces.map(sauce => (
          <Link to={`/sauces/${sauce.id}`} key={sauce.id} >
            <SingleSauce sauce={sauce} />
          </Link>
        ))}
      </div>
    )
  }
}
