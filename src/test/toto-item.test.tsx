import React from 'react';
import * as ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import TodoItem from '../../src/components/todo-item';

const todo = {id: "1", text: "laundry",isCompleted: false}
const handleTodoUpdate = jest.fn();
const handleTodoComplete = jest.fn();

test('renders todo item', () => {
  const todoItem  = render(<TodoItem todo={todo} handleTodoUpdate={handleTodoUpdate} handleTodoComplete={handleTodoComplete}/>);
  expect(todoItem).toMatchSnapshot();
});
