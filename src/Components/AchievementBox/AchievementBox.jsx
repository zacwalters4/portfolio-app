import './AchievementBox.css'
import border from './../../Borders/Achievement_Borders.png'

const AchievementBox = ({icon, source, text, link}) => {
    console.log(icon)
    return (
        <div className='achievement-box'>
            <div className='achievement-icon'>
                <img className='icon-border' src={border} />
                <img className='icon' src={icon} />
            </div>
            <div className='achievement-text-box'>
                <div className='achievement-source'>
                    <p className='source-text'>{source}</p>
                </div>
                <div className='achievement-text'>
                    {text}
                </div>
            </div>

        </div>
    )
}

export default AchievementBox