import React, { Component } from 'react'

const url = 'http://localhost:8080/'

class App extends Component {
  render () {
    return (
      <div>
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
          </header>
          <section className="main">
          <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
              <li className="completed">
                <div className="view">
                  <input className="toggle" type="checkbox" defaultChecked />
                  <label>Taste JavaScript</label>
                  <button className="destroy" />
                </div>
                <input className="edit" defaultValue="Create a TodoMVC template" />
              </li>
              <li>
                <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>Buy a unicorn</label>
                  <button className="destroy" />
                </div>
                <input className="edit" defaultValue="Rule the web" />
              </li>
            </ul>
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
