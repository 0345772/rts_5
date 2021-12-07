import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchUsers } from './store/reducers/ActionCreators';


function App() {

  const dispatch = useAppDispatch();
  const {users } = useAppSelector(state=> state.userReducer)
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])
  return (
    <div className="App">
      {JSON.stringify(users, null, 2)}
    </div>
  );
}

export default App;


