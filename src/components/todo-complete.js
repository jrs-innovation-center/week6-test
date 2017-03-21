import React from 'react'

class TodoComplete extends React.Component {

  render() {
    return (
      <div>
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
      </div>
    )
  }
}

export default TodoComplete
