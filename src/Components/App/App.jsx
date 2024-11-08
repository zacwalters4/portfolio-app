import './App.css'
import logo from './name-logo.png'
import useSound from 'use-sound'
import tick from './../../Sounds/Menu_Tick.wav'
import { useState } from 'react'
import Technologies from '../Technologies/Technologies'

function App() {

  const [play] = useSound(tick)

  const menuTick = () => {
    play()
  }

  return (
    <main>
      <img className='logo' src={logo}/>
      {/* <div className='link-container'>
        <p className='menu-items' onMouseEnter={menuTick}>Portfolio</p>
        <p className='menu-items' onMouseEnter={menuTick}>Technologies</p>
        <p className='menu-items' onMouseEnter={menuTick}>Achievements</p>
        <p className='menu-items' onMouseEnter={menuTick}>About Me</p>
        <p className='menu-items' onMouseEnter={menuTick}>Resume</p>
      </div> */}
      <Technologies />
    </main>
  );
}

export default App;
