// Import dependencies
import * as React from 'react'

// Import interfaces
import { TodoItemInterface } from './../interfaces'

// TodoItem component
const TodoItem = (props: TodoItemInterface) => {
  return (
    <div className='todo-item' onClick={() => props.handleTodoComplete(props.todo.id)}>
      <div className="todo-item-input-wrapper">
      {props.todo.isCompleted ? (
        <input className="checked"
          value={props.todo.text}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleTodoUpdate(event, props.todo.id)}
        /> 
      ) : (
        <input
          value={props.todo.text}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleTodoUpdate(event, props.todo.id)}
        /> 
      )}
      </div>
    </div>
  )
}

export default TodoItem