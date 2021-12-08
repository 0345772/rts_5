import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IUser } from '../../models';
import { fetchUsers } from '../../store';
import { SuperList } from '../SuperList';
import { UserItem } from './UserItem';

export const UsersContainer = () => {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(state => state.userReducer)
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])
  return (
    <div>
      <h3 className="signature">Список пользователей: </h3>
      {isLoading && <h3>Loadding...</h3>}
      {error && <h3>Error...${error}</h3>}
      <SuperList

        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
    </div>
  );
};
