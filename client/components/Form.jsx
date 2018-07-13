import React from 'react'

const Form = props =>  (
    <div>
    {Object.values(props).length &&
      <form id="form" onSubmit={props.handleSubmit}>
        <label htmlFor="title">Title:
        </label>
        <input value={props.title} name="title" type="text" onChange={props.handleChange} />
        <label htmlFor="author">Author:</label>
        <input value={props.author} name="author" type="text" onChange={props.handleChange} />
        <label htmlFor="bookJacket">Book Jacket Image Url:</label>
        <input value={props.bookJacket} name="bookJacket" type="text" onChange={props.handleChange} />
        <button type="submit" disabled={!props.title && !props.author && !props.bookJacket}>Submit</button>
        {props.errorMessage && <div className="error">{props.errorMessage}</div>}
      </form>
    }
    </div>
)

export default Form

/* disabled prop on submit button: we don't want to send an update to the server if the user hasn't typed anything inside any of the input fields.
  By passing that conditional statement (!props.title && !props.author && !props.bookJacket) to the disabled prop, we're saying don't enable anybody 
  to submit this form if all of those fields are blank
  (remember an empty string evaluates to falsy!
    '' == false => true
  )
*/

