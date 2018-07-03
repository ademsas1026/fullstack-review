import React, { Component } from 'react'
import axios from 'axios'
import { Typography } from '@material-ui/core'

export default class Book extends Component {
  constructor(){
    super()
    this.state = {
      selectedBook: {}
    }
  }

  async componentDidMount(){
    try {
      const res = await axios.get(`/api/books/${this.props.match.params.bookId}`)
      const selectedBook = res.data
      console.log(selectedBook.bookJacket)
      this.setState({ selectedBook })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { selectedBook } = this.state

    return (
      <div className="item">
      
        <h3>{selectedBook.title}</h3>
        <h4>{selectedBook.author}</h4>
        <img src={selectedBook.bookJacket} alt={selectedBook.title} className="book" />
      
      </div>
    )
  }
}
