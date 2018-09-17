import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
  constructor() {
    super()
    this.state={
      text: '',
    }
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addToDo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <p>
            <label>add todo</label>
            <input onChange={(e) => this.handleChange(e)} type="text" value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
    addToDo: formData => dispatch({ type: "ADD_TODO", payload: formData })
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
