import React from 'react';
import * as ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import TodoList from '../../src/components/todo-list';

const todos = [{id: "1", text: "laundry",isCompleted: false}]
const handleTodoUpdate = jest.fn();
const handleTodoComplete = jest.fn();

test('renders todo list', () => {
  const todoList  = render(<TodoList todos={todos} handleTodoUpdate={handleTodoUpdate} handleTodoComplete={handleTodoComplete}/>);
  expect(todoList).toMatchSnapshot();
});