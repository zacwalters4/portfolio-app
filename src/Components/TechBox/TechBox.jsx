import './TechBox.css'
import border from './../../Borders/Achievement_Borders.png'

const TechBox = ({icon, name}) => {

    return (
        <div className='tech-box'>
            <div className='icon-container'>
                <img src={border} className='icon-border'/>
                <img src={icon} className='tech-icon'/>
            </div>
            <p className='tech-name'>{name}</p>
        </div>
    )
}

export default TechBox