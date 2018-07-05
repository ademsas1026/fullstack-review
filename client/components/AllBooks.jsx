import React, { Component } from 'react'
import axios from 'axios'
import SingleBook from './SingleBook.jsx'

export default class AllBooks extends Component {
  constructor(){
    super()
    this.state = {
      books: []
    }
  }

  async componentDidMount(){
    try {
      const { data } = await axios.get('/api/books')
      const books = data
      this.setState({ books: books })
    } catch (err) {
      console.error(err)
    }
  }

  render(){
    const { books } = this.state
    return (
      <div id="items">
        {
          books.length && books.map(currentBook => (
            <SingleBook book={currentBook} key={currentBook.id} />
          ))
        }
      </div>
    )
  }
 
}
