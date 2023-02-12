import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Auth from './pages/Auth';
import { UserContext } from './context/UserProvider';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Public from './pages/Public';
import SpecificIssue from './pages/SpecificIssue';
import ProtectedRoute from './components/ProtectedRoute';

export default function App(){
  const {token, logout, signup, login, resetAuthErr, errMsg} = useContext(UserContext)

  return (
    <div className="app">
      {token && <Navbar logout={logout}/>}
      <Routes>
        <Route 
          exact path="/" 
          element={token ? <Navigate to='/profile'/> : <Auth  signup={signup} login={login} resetAuthErr={resetAuthErr} errMsg={errMsg}/>}
        />
        <Route 
          path="/profile"
          element={<ProtectedRoute token={token} redirectTo='/'> <Profile /> </ProtectedRoute>}
        />
        <Route 
          path="/public"
          element={<Public />}
        />
        <Route path='/issue/:issueId' element={<ProtectedRoute token={token} redirectTo='/'> <SpecificIssue /> </ProtectedRoute>}/>
      </Routes>
    </div>
  )
}

// Need to add update in profile and return to login when loggin out