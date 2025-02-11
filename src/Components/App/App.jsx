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
import { Link, useLocation } from 'react-router-dom'
import resume from './Resume.pdf'
import { useMediaQuery } from 'react-responsive'

const App = () => {
  const location = useLocation()
  const state = location.state
  const [currentMenu, setCurrentMenu] = useState('menu')
  const [play] = useSound(tickSound)
  const open = useSound(openSound)
  const close = useSound(closeSound)
  const [sound, setSound] = useState(state ? state.sound : false)
  const [opened, setOpened] = useState(state ? state.sound : false)
  const minWidth = useMediaQuery({ minDeviceWidth: 1050 })

  useEffect(() => {
    if(sound) {       
        if(currentMenu != 'menu') {
          open[0]()
        } else if(opened === true) {
            close[0]()
        }
        else {
          close[0]()
        }
    }
  }, [currentMenu])

  const handleMenuClick = (e) => {
    setCurrentMenu(e.target.id)
    setOpened(false)
  }

  const handleSoundClick = (e) => {
    setSound(sound => !sound)
  }

  const menuTick = () => {
    if(sound) {
      play()
    }
  }

  return (
    <main>
      {(currentMenu === 'menu' || minWidth) && <img className='logo' src={logo}/>}
      {(currentMenu === 'menu') &&
        <div className='link-container'>
          <Link to={'/portfolio'} state= {{sound: sound}} className='menu-items' onMouseEnter={menuTick}>Portfolio</Link>
          <p className='menu-items' id='experience' onMouseEnter={menuTick} onClick={handleMenuClick}>Experience</p>
          <p className='menu-items' id='technologies' onMouseEnter={menuTick} onClick={handleMenuClick}>Technologies</p>
          <p className='menu-items' id='achievements' onMouseEnter={menuTick} onClick={handleMenuClick}>Achievements</p>
          <p className='menu-items' id='about' onMouseEnter={menuTick} onClick={handleMenuClick}>About Me</p>
          <a className='menu-items' href={resume} target='_blank' onMouseEnter={menuTick}>Resume</a>
          {
          sound ? <p className='menu-items' onMouseEnter={menuTick} onClick={handleSoundClick}>Sound</p> 
          : <p className='menu-items' onMouseEnter={menuTick} onClick={handleSoundClick}><s>Sound</s></p> }
          
        </div>
      }
      {currentMenu === 'technologies' && 
        <Technologies handleMenuClick={handleMenuClick} sound={sound}/>
      }
      {currentMenu === 'achievements' && 
        <Achievements handleMenuClick={handleMenuClick} sound={sound}/>
      }
      {currentMenu === 'about' && 
        <About handleMenuClick={handleMenuClick} sound={sound}/>
      }
      {currentMenu === 'experience' && 
        <Experience handleMenuClick={handleMenuClick} sound={sound}/>
      }
      
    </main>
  );
}

export default App;
