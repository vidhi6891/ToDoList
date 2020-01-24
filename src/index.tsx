// Import dependencies
import * as React from 'react'
import { render } from 'react-dom'

// Import components
import TodoForm from './components/todo-form'
import TodoList from './components/todo-list'

// Import interfaces
import { TodoInterface } from './interfaces'

// Import styles
import './styles/styles.css'

// TodoListApp component
const TodoListApp = () => {
  const [todos, setTodos] = React.useState<TodoInterface[]>([])

  // Creating new todo item
  function handleTodoCreate(todo: TodoInterface) {
    // Prepare new todos state
    const newTodosState: TodoInterface[] = [...todos]

    // Update new todos state
    newTodosState.push(todo)

    // Update todos state
    setTodos(newTodosState)
  }

  // Update existing todo item
  function handleTodoUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) {
    // Prepare new todos state
    const newTodosState: TodoInterface[] = [...todos]

    // Find correct todo item to update
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.text = event.target.value

    // Update todos state
    setTodos(newTodosState)
  }

  // Check existing todo item as completed
  function handleTodoComplete(id: string) {
    // Copy current todos state
    const newTodosState: TodoInterface[] = [...todos]

    // Find the correct todo item and update its 'isCompleted' key
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted

    // Update todos state
    setTodos(newTodosState)
  }

  return (
    <div className="todo-list-app">
      <TodoForm
        todos={todos}
        handleTodoCreate={handleTodoCreate}
      />

      <TodoList
        todos={todos}
        handleTodoUpdate={handleTodoUpdate}
        handleTodoComplete={handleTodoComplete}
      />
    </div>
  )
}

const rootElement = document.getElementById('root')
render(<TodoListApp />, rootElement)
