import './Achievements.css'
import tick from './../../Sounds/Menu_Tick.wav'
import useSound from 'use-sound'
import AchievementBox from '../AchievementBox/AchievementBox'
import turingLogo from '../../Icons/turinglogo.png'
import top500Icon from '../../Icons/top500.png'
import usaplIcon from '../../Icons/usapl.jpg'
import fuelIcon from '../../Icons/dallasfuel.png'

const Achievements = ({handleMenuClick}) => {

    const [play] = useSound(tick)

    const menuTick = () => {
      play()
    }

    return (
        <div className='achievements'>
            <h1>Achievements</h1>
            <div className='achievement-container'>
                <AchievementBox 
                    icon={turingLogo} 
                    source={'Get Educated!'} 
                    text={<p className='description-text'>Recieved an ACCET Accredited Frontend Software Engineering Certificate from Turing School of Software & Design.</p>}
                />
                <AchievementBox icon={fuelIcon} 
                    source={'It\'s getting hot in here...'} 
                    text={<p className='description-text'>Created <a className='achievement-link' href={'https://x.com/aimlab/status/1532723928841478144'}>Aim lab's</a> Overwatch League 2022 Kickoff Clash Tasks. These in game tasks were played by fans at <a className='achievement-link' href={'https://x.com/DallasFuel/status/1534937152819187712'}>Dallas Fuel's</a> homestand!</p>} 
                />
                <AchievementBox icon={top500Icon} source={'What\'s an aimbot?'} text={<p className='description-text'>Achieved top 100 ranking in Overwatch competitive.</p>}/>
                <AchievementBox locked={true} icon={usaplIcon} source={'Power up!'} text={<p className='description-text'>Place first in a USA Powerlifting sanctioned competition.</p>}/>
            </div>
            <button className='back-button' id='menu' onMouseEnter={menuTick} onClick={handleMenuClick}>Back</button>
        </div>
    )
}

export default Achievements