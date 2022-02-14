import React, { Profiler } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

function TodoList({ todoList, onTodoClick }) {
  const handleTodoClick = (id) => {
    if (onTodoClick) onTodoClick(id);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <ul className="todo-list">
        {todoList.map((todo) => (
          <li
            key={todo.id}
            className={classnames({ completed: todo.status === 'completed' })}
            onClick={() => handleTodoClick(todo.id)}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
