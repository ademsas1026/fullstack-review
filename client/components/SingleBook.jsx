import React from 'react'

const SingleBook = props => {
    const { book, key } = props
    console.log('this is key', key)
    return (
      <div className="item">
        <h3>{book.title}</h3>
        <h4>{book.author}</h4>
        <img className="book" alt={book.title} src={book.bookJacket} />
      </div>
    )
}


export default SingleBook;





