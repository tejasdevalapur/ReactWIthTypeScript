import React from 'react';
import './App.css';

import Customer from './components/Customer';
import UserList from './components/UserList';
import Users from './components/User';
function App() {
  return (
    <div className="App">
      
        <h1>Main App</h1>
        <React.Fragment>
            <Customer name={'Tejas'} age={25} title={'Software Engineer'} />
          { /* <UserList/>*/}
            <Users/>
        </React.Fragment>
    </div>
  );
}

export default App;
