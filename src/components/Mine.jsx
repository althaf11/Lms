// src/App.js
import React, { useState } from 'react';
import Login from './components/Login';
import Registration from './components/Registration';

function Mine() {
  const [isRegistered, setIsRegistered] = useState(false);

  const toggleRegistration = () => {
    setIsRegistered(!isRegistered);
  };

  return (
    <div className="App">
      {isRegistered ? <Login /> : <Registration toggleRegistration={toggleRegistration} />}
      <button className="text-blue-500 hover:underline mt-4" onClick={toggleRegistration}>
        {isRegistered ? 'Create an account' : 'Already have an account? Sign in'}
      </button>
    </div>
  );
}

export default Mine;
