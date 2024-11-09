import './About.css'
import tick from './../../Sounds/Menu_Tick.wav'
import useSound from 'use-sound'


const About = ({handleMenuClick}) => {

    const [play] = useSound(tick)

    const menuTick = () => {
      play()
    }

    return (
        <div className='about'>
            <h1>About Me</h1>
            <div className='about-container'>
                <p className='about-text'>
                Hello, my name is Zac. I recently graduated from the Turing School of Software & Design and was recently employed with NovaEdge Technology as a Front End Software Engineer. I am heavily motivated by self improvement and competition, and driven to push myself and my development skills to the highest level possible. Outside of software development, I spend my free time powerlifting and gaming competitively.
                </p>
                <div className='socials-container'>

                </div>
            </div>
            <button className='back-button' id='menu' onMouseEnter={menuTick} onClick={handleMenuClick}>Back</button>
        </div>
    )
}

export default About