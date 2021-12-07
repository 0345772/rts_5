import React, { FC } from 'react';
import { IUser } from '../../models';

import cl from './UserItem.module.css';


interface UserItemProps {
  user: IUser;
}

export const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div className={cl.user}>
      {user.id}. <strong>{user.name}</strong>
      <div className={cl.userEmail}>{user.email}</div>
      <div className={cl.userCity}> {user.address.city}</div>
      <div className={cl.userStreet}>{user.address.street}</div>
      <div className={cl.userZipcode}>{user.address.zipcode}</div>
    </div>
  );
};