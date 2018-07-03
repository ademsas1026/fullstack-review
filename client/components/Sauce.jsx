import React, { Component } from 'react'
import axios from 'axios'
import { Typography } from '@material-ui/core'

export default class Sauce extends Component {
  constructor(){
    super()
    this.state = {
      selectedSauce: {}
    }
  }

  async componentDidMount(){
    try {
      const res = await axios.get(`/api/sauces/${this.props.match.params.sauceId}`)
      const selectedSauce = res.data
      this.setState({ selectedSauce })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { selectedSauce } = this.state
    console.log('this.props', this.props)
    return (
      <div className="item">
        <Typography variant="headline" style={{color: 'slategrey', marginBottom: '0.5em', marginLeft: '1em'}}>{selectedSauce.name}</Typography>
        <img src={selectedSauce.image} alt={selectedSauce.name}/>
      </div>
    )
  }
}

