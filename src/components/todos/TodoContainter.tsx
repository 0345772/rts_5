

import React from 'react';
import { ITodo } from '../../models';
import { superAPI } from '../../services';
import { TodoItem } from './TodoItem';

export const TodoContainter = () => {
  const { data: todos, isLoading, error } = superAPI.useFetchAllTodosQuery(50);
  const [createTodo, { error: createError, isLoading: isCreateLoading }] = superAPI.useCreateTodoMutation();
  const [deleteTodo, {}] = superAPI.useDeleteTodoMutation();
  const [updateTodo, {}] = superAPI.useUpdateTodoMutation()

  const handleCreate = async () => { 
    const title = prompt();
    await createTodo({ title, body: title } as ITodo)
  }

  const handleRemove = (todo: ITodo) => {
      deleteTodo(todo) 
  }

  const handleUpdate = (todo: ITodo) => {
     updateTodo(todo)
  }
   
  return (
    <div>
      <h3 className="signature">Список Todos:</h3>
      <button onClick={handleCreate}>Add new Todo</button>
      {isCreateLoading && <h4>Create Loading</h4>}
      {isLoading && <h4 style={{ color: "blue" }}>LOADDING...</h4>}
      {error && <h4 style={{ color: "red" }}>ERROR...</h4>}
      {createError && <h4>Create Error</h4>}
      {todos && todos.map((todo, i) =>
       
        <TodoItem
          key={todo.id}
          todo={todo}
          num={i+1}
          remove={handleRemove}
          update={handleUpdate}          
        />
      )}
    </div>
  );
};
