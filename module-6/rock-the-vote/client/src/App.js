import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Auth from './pages/Auth';
import { UserContext } from './context/UserProvider';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Public from './pages/Public';
import SpecificIssue from './pages/SpecificIssue';

export default function App(){
  const {token, logout, signup, login} = useContext(UserContext)

  return (
    <div className="app">
      <Navbar logout={logout}/>
      <Routes>
        <Route 
          exact path="/" 
          element={token ? <Navigate to='/profile'/> :<Auth  signup={signup} login={login}/>}
        />
        <Route 
          path="/profile"
          element={<Profile />}
        />
        <Route 
          path="/public"
          element={<Public />}
        />
        <Route path='/issue/:issueId' element={<SpecificIssue />}/>
      </Routes>
    </div>
  )
}

// token ? <Navigate to='/profile'/> : 