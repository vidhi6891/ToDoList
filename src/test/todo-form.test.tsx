import React from 'react';
import * as ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import TodoForm from '../../src/components/todo-form';

const todos = [{id: "1", text: "laundry",isCompleted: false}]
const handleTodoCreate = jest.fn();

test('renders todo form', () => {
  const todoForm  = render(<TodoForm todos={todos} handleTodoCreate={handleTodoCreate}/>);
  expect(todoForm).toMatchSnapshot();
});