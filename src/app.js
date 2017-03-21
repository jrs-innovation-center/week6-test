import React, { Component } from 'react'
import { append } from 'ramda'
import fetch from 'isomorphic-fetch'
const url = 'http://localhost:8080/todos'

import TodoList from './components/todo-list'
import TodoInput from './components/todo-input'
import TodoComplete from './components/todo-complete'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
    this.addTodo = this.addTodo.bind(this)
  }
  componentDidMount () {
    fetch(url).then(response => response.json())
      .then(json => this.setState({todos: json}))
  }
  addTodo (text) {
    const newTodoItem = {id: this.state.todos.length + 1, text, completed: false}
    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodoItem)
    })
    .then(response => response.json())
    .then(json => {
      const newTodoList = append(json, this.state.todos)
      this.setState({todos: newTodoList})
    })
  }
  render () {
    return (
      <div>
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <TodoInput addTodo={this.addTodo} />
          </header>

          <section className="main">
            <TodoComplete />
            <TodoList todos={this.state.todos} />
          </section>
        </section>
        <footer className="info">
          <p>Double-click to edit a todo</p>
    			<p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
    			<p>Created by <a href="#">you</a></p>
    			<p>Part of <a href="#">TodoMVC App</a></p>
        </footer>
      </div>
    )
  }
}

export default App
