import React from 'react'

const Form = props => {
  return (
    <form>
        <div id= 'formCont'>

      <div className="form-group">
        <label htmlFor="title">Book Search</label>
        <input type="text" className="form-control" id="title" aria-describedby="movieHelp" placeholder="Goodfellas" onChange={props.handleInputChange} value={props.title} />
        <small id="movieHelp" className="form-text text-muted">Enter book title here..</small>
      </div>
      <button type="submit" className="btn btn-primary" onClick={props.handleSearchMovie}>Search</button>
      </div>
    </form>

  )
}

export default Form
