import React, { Component } from 'react'

const Form = props =>  (
  <form id="form" onSubmit={props.handleSubmit}>
    <label htmlFor="title">Title:
    </label>
    <input value={props.title} name="title" type="text" onChange={props.handleChange} />
    <label htmlFor="author">Author:</label>
    <input value={props.author} name="author" type="text" onChange={props.handleChange} />
    <label htmlFor="bookJacket">Book Jacket Image Url:</label>
    <input value={props.bookJacket} name="bookJacket" type="text" onChange={props.handleChange} />
    <button type="submit" disabled={!props.title || !props.author || !props.bookJacket}>Submit</button>
    {props.errorMessage && <div className="error">{props.errorMessage}</div>}
  </form>
)

export default Form



