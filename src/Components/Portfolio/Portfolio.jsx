import './Portfolio.css'
import logo from './name-logo.png'
import useSound from 'use-sound'
import tickSound from './../../Sounds/Menu_Tick.wav'
import openSound from './../../Sounds/Menu_Open.wav'
import closeSound from './../../Sounds/Menu_Close.wav'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import PortfolioBox from '../PortfolioBox/PortfolioBox'
import { projects } from './projects'

const Portfolio = () => {
    const location = useLocation()
    const sound = location.state ? location.state.sound : false
    const [currentMenu, setCurrentMenu] = useState('menu')
    const [play] = useSound(tickSound)
    const open = useSound(openSound)
    const close = useSound(closeSound)
    const [opened, setOpened] = useState(true)



    useEffect(() => {
        if(sound) {       
            if(currentMenu != 'menu') {
              open[0]()
            } else if(opened === true) {
                open[0]()
            }
            else {
              close[0]()
            }
        }
    })

    const handleMenuClick = (e) => {
        setCurrentMenu(e.target.id)
        setOpened(false)
    }

    const menuTick = () => {
        if(sound) play()
    }

    return (
        <main>
            {(currentMenu === 'menu') && <img className='logo' src={logo}/>}
        
            {(currentMenu === 'menu') &&
                <div className='link-container'>
                    {
                        Object.keys(projects).map((project, key) =>{
                            return <p className='portfolio-items' sound={+sound} id={project} key={key} onMouseEnter={menuTick} onClick={handleMenuClick}>{projects[project].name}</p>
                        })
                    }       
                    <Link onClick={()=> {if(sound) close[0]()}}to='/' state= {{sound: sound}} className='portfolio-items' onMouseEnter={menuTick}>Back</Link>
                </div>
            }
            {currentMenu != 'menu' && 
                <PortfolioBox handleMenuClick={handleMenuClick} project={projects[currentMenu]}/>
            }
        </main>
    )
}

export default Portfolio;
