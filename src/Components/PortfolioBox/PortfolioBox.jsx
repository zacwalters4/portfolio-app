import './PortfolioBox.css'
import tick from './../../Sounds/Menu_Tick.wav'
import useSound from 'use-sound'


const PortfolioBox = ({handleMenuClick, project, sound}) => {

    const [play] = useSound(tick)

    const menuTick = () => {
      if(sound) play()
    }

    return (
        <div className='portfolio-box'>
            <h1>{project.name}</h1>
            <div className='project-container'>
                <div className='info-link-box'>
                    <div className='project-info'>
                        <p className='info-text'>{project.description}</p>
                    </div>
                    {project.github && 
                        <a href={project.github}>
                            <img className='socials-badge' src={'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'} alt={'GitHub'}></img>
                        </a>
                    }
                </div>
                <img className='project-preview' alt={`${project.name} preview`} src={project.preview}/>
                <div className='tech-list'>
                    {project.technologies && project.technologies.map((tech,key) => {
                        return <img className='tech-tile' src={tech} key={key}/>
                    })}
                </div>
            </div>
            <button className='back-button' id='menu' onMouseEnter={menuTick} onClick={handleMenuClick}>Back</button>
        </div>
    )
}

export default PortfolioBox