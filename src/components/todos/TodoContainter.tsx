

import React from 'react';
import { todoAPI } from '../../services';
import { TodoItem } from './TodoItem';

export const TodoContainter = () => {
  const {data: todos, isLoading, error} = todoAPI.useFetchAllTodosQuery(30)
  return (
    <div>
      <h3 className="signature">Список Todos:</h3>
      {isLoading && <h4 style={{color:"blue"}}>LOADDING...</h4>}
      {error && <h4 style={{ color: "red" }}>ERROR...</h4>}
      {todos && todos.map(todo => 
        <TodoItem
          key={todo.id}
          todo={todo}
        />
        )}
    </div>
  );
};
