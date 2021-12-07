import React, { useEffect } from 'react';
import { SuperList, UserItem } from './components';
import { useAppDispatch, useAppSelector } from './hooks';
import { IUser } from './models';
import { fetchUsers } from './store/reducers/ActionCreators';


function App() {

  const dispatch = useAppDispatch();
  const {users } = useAppSelector(state=> state.userReducer)
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])
  return (
    <div className="App">
      <SuperList
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
     
    </div>
  );
}

export default App;


