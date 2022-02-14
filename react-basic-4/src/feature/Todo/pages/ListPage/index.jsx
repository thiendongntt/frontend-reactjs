import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import queryString from 'query-string';

ListPage.propTypes = {};

function ListPage(props) {
  const initialTodoList = [
    { id: 1, title: 'Eat', status: 'new' },
    { id: 2, title: 'Sleep', status: 'completed' },
    { id: 3, title: 'Code', status: 'new' },
    { id: 4, title: 'Repeat', status: 'new' },
  ];

  const location = useLocation();
  console.log('Location: ', location);
  const history = useHistory();
  console.log('useHistory', history);
  const match = useRouteMatch();

  const [todoList, setTodoList] = useState(() => initialTodoList);

  const handleTodoClick = (id) => {
    console.log(id);
    const findIndex = todoList.findIndex((todo) => todo.id === id);
    if (findIndex === -1) return;
    const newTodoList = [...todoList];
    newTodoList[findIndex] = {
      ...newTodoList[findIndex],
      status: newTodoList[findIndex].status === 'new' ? 'completed' : 'new',
    };
    setTodoList(newTodoList);
  };

  const [filterStatus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search);
    console.log(params);
    return params.status || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    console.log(params);
    setFilterStatus(params.status || 'all');
  }, [location.search]);

  const newFilterTodoList = todoList.filter((todo) => filterStatus === 'all' || filterStatus === todo.status);
  console.log(newFilterTodoList);

  const handleShowAllClick = () => {
    // setFilterStatus('all');

    const queryParams = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowCompletedClick = () => {
    // setFilterStatus('completed');
    const queryParams = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowNewClick = () => {
    // setFilterStatus('new');
    const queryParams = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  return (
    <div>
      <h1>Todo feature</h1>
      <TodoList todoList={newFilterTodoList} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
