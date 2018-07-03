import React from 'react'

const SingleBook = props => {
    const { book } = props

    return (
      <div className="item">
        <h3>{book.title}</h3>
        <h4>{book.author}</h4>
        <img src={book.bookJacket} alt={book.title} className="book" />
      </div>
    )
}


export default SingleBook;
