import './TechBox.css'
import border from './../../Borders/Achievement_Borders.png'

const TechBox = ({icon, name}) => {

    return (
        <div className='tech-box'>
            <div className='icon-container'>
                <img src={icon} className='tech-icon'/>
            </div>
            <div className='name-container'>
                <p className='tech-name'>{name}</p>
            </div>
        </div>
    )
}

export default TechBox