import React from 'react';
import { PostContainer, UsersContainer, TodoContainter } from './components';

function App() {
  return (
    <div className="App">
      <TodoContainter />
      <hr />

      <UsersContainer />
      <hr style={{ margin: "10px" }} />
      <PostContainer />
     

    </div>
  );
}
export default App;




