import React, { FC, useState } from 'react';
import cl from './MyInput.module.css';

interface MyInputProps {
  props: string | number;
  onChange: ()=>void;
}

export const MyInput: FC<MyInputProps> = ({ props }) => {
  const [value, setValue] = useState('');
  const handleChang = (e: { stopPropagation: () => void; target: { value: string; }; }) => {
    e.stopPropagation();
    setValue(e.target.value = value)
  }
  return (
    <input
      value={value}
      onChange={handleChang}
      className={cl.myInput}
      {...props}
    />
  );
};