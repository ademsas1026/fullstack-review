import React, { Component } from 'react'
import axios from 'axios'
import { Typography } from '@material-ui/core'

import Form from './Form.jsx'

/*
 on props: handleSubmit, title, author, bookJacket, errorMessage, handleChange
*/

export default class Book extends Component {
  constructor(){
    super()
    this.state = {
      selectedBook: {},
      title: '',
      author: '',
      bookJacket: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleChange(event){
    /*this is a generic handle change function -
    rather than writing a handle change that's specific to
    each field on the state, we can write one DRY
    handleChange method that pulls the name of the
    state field from event.target
    This means that we MUST remember to provide each
    of our input tags a 'name' property that is equal
    to one of the state fields
    */
    this.setState({ [event.target.name]: event.target.value })
  }

  async handleSubmit(event){
    event.preventDefault()
    if (Object.values(this.state.selectedBook).length){
      try {
        /*  remember this is an update form, and the user might only want to update one field.
        e.g. if the user only wants to change the title, then we should make sure to only send
        the content from input fields that the user has actually typed something in. if they
        haven't typed anything in a field, then we should send the original value,
        which will live on this.state.selectedBook
        */
        let { title, author, bookJacket, selectedBook } = this.state
        title = title.length ? title : selectedBook.title
        author = author.length ? author : selectedBook.author
        bookJacket = bookJacket.length ? bookJacket : selectedBook.bookJacket
        /* remember axios / all AJAX requests are supposed to trigger one of our server HTTP requests
           and because of this will take an undetermined amount of time to execute. THIS is why they should be
           written within async functions
        */
        const result = await axios.put(`/api/books/${this.state.selectedBook.id}`, { title, author, bookJacket })
        console.log('this is the result', result)
        /* in order to make sure your updates register immediately, without user having to refresh the page */
        const updatedBook = result.data
        this.setState({ selectedBook: updatedBook })
      } catch (err){
        console.error(err)
      }
    }
   
  }

  render() {
    const { selectedBook } = this.state
    const { title, author, bookJacket } = this.state
    return (
      <div className="item">
      
        <h3>{selectedBook.title}</h3>
        <h4>{selectedBook.author}</h4>
        <img src={selectedBook.bookJacket} alt={selectedBook.title} className="book" />
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          title={title}
          author={author}
          bookJacket={bookJacket}
        />
      </div>
    )
  }
}
