import React, { FC } from 'react';
import { ITodo } from '../../models';
import cl from './TodoItem.module.css';

interface TodoItemProps {
  todo: ITodo;
 
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {

  return (
    <div className={cl.todo}>
      <div className={cl.content}>
        <span className={cl.id}> {todo.id}.</span>
        <span className={cl.title}>{todo.title}</span> 
      </div>
      <div className={cl.completed}>{todo.completed}</div>
      <input
        type="checkbox"
    
      />
    </div>
  );
};
