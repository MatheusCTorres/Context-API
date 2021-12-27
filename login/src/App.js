import './App.css';
import LoginPage from './components/LoginPage.js'
import React, {useState} from 'react'
import Profile from './components/Profile'
import {LoginContext} from './contexts/LoginContext'

function App() {

  const [username, setUsername] = useState("")
  const [showProfile, setShowProfile] = useState(false)

  return (
    <div className="App">
      <LoginContext.Provider value={{username, setUsername, setShowProfile}}>
        {showProfile ? <Profile/> : <LoginPage/>}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
