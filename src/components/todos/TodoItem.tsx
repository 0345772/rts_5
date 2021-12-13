import React, { FC} from 'react';
import { ITodo } from '../../models';
import cl from './TodoItem.module.css';

interface TodoItemProps {
  todo: ITodo;
  update: (todo: ITodo) => void;
  remove: (todo: ITodo) => void;
  num? : number;

}

export const TodoItem: FC<TodoItemProps> = ({ todo, remove, update, num }) => {
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    remove(todo)
  }
  const handleUpdate = (event: React.MouseEvent) => {
    const title = prompt() || "";
    update({...todo, title})
  }
 

  return (
    <div className={cl.todo} onClick={handleUpdate}>
      <div className={cl.content}>
        <span className={cl.id}> {num}.</span>
        <span className={cl.title}>{todo.title}</span>
        <div className={cl.body}>{todo.body}</div>
      </div>
      <div className={cl.completed}>{todo.completed}</div>
      <input
       
        type="checkbox" />
      <button onClick={handleRemove}>delete</button>
    </div>
  );
};
