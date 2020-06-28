import React from 'react';
import UserList from './components/UserList';
import User from './components/User'

function App() {
  const baseUrl = 'http://localhost:8080'

  return (
    <div>
      <UserList
      baseUrl={baseUrl} 
      />
      <User
      baseUrl={baseUrl}
      username='ruv'
      />
    </div>
  );
}

export default App;
