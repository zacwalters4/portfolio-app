import './Experience.css'
import tick from './../../Sounds/Menu_Tick.wav'
import useSound from 'use-sound'
import ExperienceBox from '../ExperienceBox/ExperienceBox'
import novaEdgeLogo from '../../Icons/novaedge_usa_logo.jpg'
import stateSpaceLogo from '../../Icons/statespace_logo.jpg'
import bardSignalsLogo from '../../Icons/bard_logo.png'

const Experience = ({handleMenuClick, sound}) => {

    const [play] = useSound(tick)

    const menuTick = () => {
        if(sound) play()
    }

    return (
        <div className='experience'>
            <h1>Experience</h1>
            <div className='experience-container'>
                <ExperienceBox 
                        icon={bardSignalsLogo} 
                        company={'Bard Signals'}
                        title={'Freelance Web Developer'}
                        date={'December 2024 - February 2025'}
                        text={<p className='description-text'>
                            ● Developed and designed a web application marketing the Bard Signals bot
                            <br/>
                            ● Created a responsive website useable on all screen sizes
                            <br/>
                            ● Frequently communicated with the customer to deliver a product matching their vision
                        </p>}
                />
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
                        ● Accumulated nearly two million Steam workshop subscribers
                    </p>} 
                />
            </div>
            <button className='back-button' id='menu' onMouseEnter={menuTick} onClick={handleMenuClick}>Back</button>
        </div>
    )
}

export default Experience