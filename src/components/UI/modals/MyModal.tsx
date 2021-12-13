import React, { FC } from 'react';
import cl from './MyModal.module.css';

interface MyModalProps {
  children?: React.ReactNode
}

export const MyModal:FC<MyModalProps> = ({children}) => {
  return (
    <div className={[cl.myModal, cl.active].join(" ")}>
      <div className={cl.myModalContent}>
        {children}
      </div>
    </div>
  );
};
