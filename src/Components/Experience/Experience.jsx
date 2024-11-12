import './Experience.css'
import tick from './../../Sounds/Menu_Tick.wav'
import useSound from 'use-sound'
import ExperienceBox from '../ExperienceBox/ExperienceBox'
import novaEdgeLogo from '../../Icons/novaedge_usa_logo.jpg'
import stateSpaceLogo from '../../Icons/statespace_logo.jpg'

const Experience = ({handleMenuClick}) => {

    const [play] = useSound(tick)

    const menuTick = () => {
      play()
    }

    return (
        <div className='experience'>
            <h1>Experience</h1>
            <div className='experience-container'>
                <ExperienceBox 
                    icon={novaEdgeLogo} 
                    company={'NovaEdge Technology'}
                    title={'Front End Software Engineer'}
                    date={'November 2023 - August 2024'}
                    text={<p className='description-text'>
                        ● Developed a web application marketing an AI personal assistant
                        <br/>
                        ● Implemented a responsive design with support for various screen sizes
                        <br/>
                        ● Wrote and maintained end-to-end tests in a continuous deployment pipeline using Vercel Checks
                        <br/>
                        ● Managed tickets in Jira following an Agile methodology
                    </p>}
                />
                <ExperienceBox icon={stateSpaceLogo} 
                    company={'Statespace'} 
                    title={'Gameplay Designer'}
                    date={'September 2021 – June 2022'}
                    text={<p className='description-text'>
                        ● Design training tasks to improve Aim Lab user&apos;s gameplay experience
                        <br/>
                        ● Create challenges in Aim Lab for a partnered event with Dallas Fuel, reflecting their brand in the design
                        <br/>
                        ● Accumulated over one million Steam workshop subscribers
                    </p>} 
                />
            </div>
            <button className='back-button' id='menu' onMouseEnter={menuTick} onClick={handleMenuClick}>Back</button>
        </div>
    )
}

export default Experience