import React, { Component } from 'react'
import Form from './Form.jsx'
import axios from 'axios'

/*
 on props: handleSubmit, title, author, bookJacket, errorMessage, handleChange
*/

class SingleBook extends Component {
  constructor(){
    super()
    this.state = {
      title: '',
      author: '',
      bookJacket: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
    this.setState({
      title: this.props.book.title,
      author: this.props.book.author,
      bookJacket: this.props.book.bookJacket
    })
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

  handleSubmit(event){
    event.preventDefault()
    try {
      const result = axios.put(`/api/books/${this.props.bookId}`, this.state)
      console.log('this is the result', result)
    } catch (err){
      console.error(err)
    }
  }
  render(){
    const { book } = this.props
    const { title, author, bookJacket } = this.state
    return (
      <div className="item">
        <h3>{book.title}</h3>
        <h4>{book.author}</h4>
        <img src={book.bookJacket} alt={book.title} className="book" />
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


export default SingleBook;

