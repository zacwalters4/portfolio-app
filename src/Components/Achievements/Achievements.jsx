import './Achievements.css'
import tick from './../../Sounds/Menu_Tick.wav'
import useSound from 'use-sound'
import AchievementBox from '../AchievementBox/AchievementBox'
import turingLogo from '../../Icons/turinglogo.png'
import top500Icon from '../../Icons/top500.png'
import usaplIcon from '../../Icons/usapl.jpg'
import fuelIcon from '../../Icons/dallasfuel.png'

const Achievements = ({handleMenuClick}) => {
    console.log(turingLogo)
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
                    source={'Turing School of Software & Design'} 
                    text={<p className='description-text'>ACCET Accredited Frontend Software Engineering Certificate</p>}
                />
                <AchievementBox icon={fuelIcon} 
                    source={'Aim Lab x Dallas Fuel'} 
                    text={<p className='description-text'>Creator of the <a className='achievement-link' href={'https://x.com/aimlab/status/1532723928841478144'}>Aim lab's</a> Overwatch League 2022 Kickoff Clash Tasks. These in game tasks were played by fans at <a className='achievement-link' href={'https://x.com/DallasFuel/status/1534937152819187712'}>Dallas Fuel's</a> homestand!</p>} 
                />
                <AchievementBox icon={top500Icon} source={'Overwatch'} text={<p className='description-text'>Multi-Season Overwatch Top 500 Ranked Player</p>}/>
                <AchievementBox icon={usaplIcon} source={'Powerlifting'} text={<p className='description-text'>Coming soon...</p>}/>
            </div>
            <button className='back-button' id='menu' onMouseEnter={menuTick} onClick={handleMenuClick}>Back</button>
        </div>
    )
}

export default Achievements