import React from 'react';
import { PostContainer, UsersContainer } from './components';
import { TodoContainter } from './components/todos/TodoContainter';

function App() {
  return (
    <div className="App">
      <UsersContainer />
      <hr style={{ margin: "10px" }} />
      <PostContainer />
      <hr style={{ margin: "10px" }} />
      <TodoContainter/>

    </div>
  );
}
export default App;




