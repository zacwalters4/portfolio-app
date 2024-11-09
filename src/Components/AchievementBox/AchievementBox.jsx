import './AchievementBox.css'
import border from './../../Borders/Achievement_Borders.png'

const AchievementBox = ({icon, source, text, locked}) => {

    return (
        <div className='achievement-box'>
            <div className='achievement-icon'>
                <img className='icon-border' src={border} />
                {locked ? 
                <img className='icon-gray' src={icon} /> : 
                <img className='icon' src={icon} />}
                
            </div>
            <div className='achievement-text-box'>
                <div className='achievement-source'>
                    {locked ? 
                    <p className='source-text-gray'>{source}</p> : 
                    <p className='source-text'>{source}</p>}
                    
                </div>
                <div className='achievement-text'>
                    {text}
                </div>
            </div>

        </div>
    )
}

export default AchievementBox