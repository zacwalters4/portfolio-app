import './App.css'
import logo from './name-logo.png'
import useSound from 'use-sound'
import tickSound from './../../Sounds/Menu_Tick.wav'
import openSound from './../../Sounds/Menu_Open.wav'
import closeSound from './../../Sounds/Menu_Close.wav'
import { useState, useEffect } from 'react'
import Technologies from '../Technologies/Technologies'
import Achievements from '../Achievements/Achievements'
import About from '../About/About'
import Experience from '../Experience/Experience'

function App() {

  const [currentMenu, setCurrentMenu] = useState('menu')
  const [play] = useSound(tickSound)
  const open = useSound(openSound)
  const close = useSound(closeSound)
  const tick = useSound(tickSound)

  useEffect(() => {
    if(currentMenu != 'menu') {
      open[0]()
    } else {
      close[0]()
    }
  }, [currentMenu])

  const handleMenuClick = (e) => {
    setCurrentMenu(e.target.id)
  }

  const menuTick = () => {
    play()
  }

  return (
    <main>
      <img className='logo' src={logo}/>
      {(currentMenu === 'menu') && 
        <div className='link-container'>
          <p className='menu-items' id='portfolio' onMouseEnter={menuTick}>Portfolio</p>
          <p className='menu-items' id='experience' onMouseEnter={menuTick} onClick={handleMenuClick}>Experience</p>
          <p className='menu-items' id='technologies' onMouseEnter={menuTick} onClick={handleMenuClick}>Technologies</p>
          <p className='menu-items' id='achievements' onMouseEnter={menuTick} onClick={handleMenuClick}>Achievements</p>
          <p className='menu-items' id='about' onMouseEnter={menuTick} onClick={handleMenuClick}>About Me</p>
          <p className='menu-items' onMouseEnter={menuTick}>Resume</p>
        </div>
      }
      {currentMenu === 'technologies' && 
        <Technologies handleMenuClick={handleMenuClick}/>
      }
      {currentMenu === 'achievements' && 
        <Achievements handleMenuClick={handleMenuClick}/>
      }
      {currentMenu === 'about' && 
        <About handleMenuClick={handleMenuClick}/>
      }
      {currentMenu === 'experience' && 
        <Experience handleMenuClick={handleMenuClick}/>
      }
      
    </main>
  );
}

export default App;
