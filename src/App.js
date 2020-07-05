import React from 'react';
import UserList from './components/UserList';
import User from './components/User'
import LoginComponent from './components/LoginComponent';
import './styles.css'

function App() {
  const baseUrl = 'http://localhost:8080'

  return (
    <div className='App'>
      <section>
        <div className='AppBranding'>
          <h2>Track Phone Usage</h2>
          <p>View and add statistics on your phone usage.</p>
          <p>Control and regulate unnecessary screen time.</p>
          <p>Say <strong>Yes</strong> to healthy eyes and a healthy life..</p> 
         
        </div>
        <div className='LoginFormWrapper'>
          <LoginComponent 
          baseUrl={baseUrl} />
        </div>
      </section>
    </div>
  );
}

export default App;
