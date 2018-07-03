import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SingleBook from './SingleBook.jsx'

export default class AllBooks extends Component {
  constructor(){
    super();
    this.state = {
      books: [],
      selectedBook: {}
    }
  }

  async componentDidMount(){
    try {
      const res = await axios.get('/api/books')
      const books = res.data
      this.setState({ books })
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    const { books } = this.state
    console.log('rendering all books component')
    return (
      <div id="items">
        { books.length && books.map(book => (
          <Link to={`/books/${book.id}`} key={book.id} >
            <SingleBook book={book} />
          </Link>
        ))}
      </div>
    )
  }
}
