import './ExperienceBox.css'
import border from './../../Borders/Achievement_Borders.png'

const ExperienceBox = ({icon, company, text, date, title}) => {

    return (
        <div className='experience-box'>
            <div className='experience-icon'>
                <img className='icon-border' src={border} />
                <img className='icon' src={icon} />
            </div>
            <div className='experience-text-box'>
                <div className='info-box'>
                    <div className='experience-info'>
                        <p className='info-text'>{company}</p>
                    </div>
                    <div className='experience-info'>
                        <p className='info-text'>{title}</p>
                    </div>
                    <div className='experience-info'>
                        <p className='info-text'>{date}</p>
                    </div>
                </div>  
                <div className='experience-text'>
                    {text}
                </div>
            </div>

        </div>
    )
}

export default ExperienceBox