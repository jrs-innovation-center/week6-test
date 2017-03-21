import React from 'react'

class TodoInput extends React.Component {
  constructor () {
    super()
    this.state = {
      todoText: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({todoText: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.addTodo(this.state.todoText)
    this.setState({todoText: ''})
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?" autoFocus
          onChange={this.handleChange}
          value={this.state.todoText}

        />
      </form>
    )
  }
}

export default TodoInput
