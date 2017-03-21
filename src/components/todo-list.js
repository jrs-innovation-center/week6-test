import React from 'react'
import { map } from 'ramda'

class TodoList extends React.Component {
  render() {
    const listTodo = (todo) => {
      return (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>{todo.text}</label>
            <button className="destroy" />
          </div>
          <input className="edit" defaultValue="Rule the web" />
        </li>
      )
    }
    return (
      <div>
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        { map(listTodo, this.props.todos) }
      </ul>
      </div>

    )
  }
}

export default TodoList
