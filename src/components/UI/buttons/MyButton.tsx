import React, { FC } from 'react';
import cl from './MyButton.module.css';

interface MyButtonProps {
  props: string;
  onClick: () => void;
  children: React.ReactNode
}

export const MyButton: FC<MyButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={cl.myBtn}>
      {children}
    </button>
  );
};