import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignIn from './assets/components/auth/SignIn';
import SignUp from './assets/components/auth/SignUp';
import AuthDetails from './assets/components/AuthDetails';

function App() {

  return (
  <div>
    <SignIn/>
    <SignUp/>
    <AuthDetails/>
  </div>
  )
}

export default App
