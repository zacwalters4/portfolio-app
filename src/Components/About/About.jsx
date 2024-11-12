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
                Hello, my name is Zac. I recently graduated from the Turing School of Software & Design and was recently employed with NovaEdge Technology as a Front End Software Engineer. I am heavily motivated by self improvement and competition, and driven to push myself and my development skills to the highest level possible. Outside of software development, I spend my free time powerlifting, gaming competitively, and on weekends I play ice hockey casually.
                </p>
                <div className='socials-container'>
                    <a href={'mailto:https://zacwalters4@gmail.com'}>
                        <img className='socials-badge' src={'https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white'} alt={'Gmail'}></img>
                    </a>
                    <a href={'https://www.linkedin.com/in/zac-walters-67951b250/'}>
                        <img className='socials-badge' src={'https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'} alt={'LinkedIn'}></img>
                    </a>
                    <a href={'https://github.com/zacwalters4'}>
                        <img className='socials-badge' src={'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'} alt={'GitHub'}></img>
                    </a>
                </div>
            </div>
            <button className='back-button' id='menu' onMouseEnter={menuTick} onClick={handleMenuClick}>Back</button>
        </div>
    )
}

export default About