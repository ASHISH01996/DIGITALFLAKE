import React from 'react'
import LoginCard from './LoginCard'
import LoginBackground from "./login-background.png"

const MainPage = () => {
  return (
    <div>
        <img src={LoginBackground} alt="login-background"  />
        <LoginCard/>
    </div>
  )
}

export default MainPage