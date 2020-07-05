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
        <div className='AppBrandingWrapper'>
          <h2 className='AppBranding'>Track Phone Usage</h2>
          <div className='FeaturesList'>
            <span className='FeatureText'>View and add statistics on your phone usage.</span>
          </div>
          <div className='FeaturesList'>
            <span className='FeatureText'>Improve productivity.</span>
          </div>
          <div className='FeaturesList'>
            <span className='FeatureText'>Monitor your screen time.</span>
          </div>
          <div className='FeaturesList'>
            <span className='FeatureText'>Save your eyes.</span>
          </div>
          
          <h4 className='slogan'>Say Yes to a healthy life..</h4> 
         
        </div>
        <div className='LoginFormWrapper'>
          <LoginComponent 
          baseUrl={baseUrl} />
        </div>
      </section>
      <div className='footer'>Designed and developed by Ruvesh.</div>
    </div>
  );
}

export default App;
