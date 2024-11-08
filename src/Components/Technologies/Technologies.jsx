import './Technologies.css'
import tick from './../../Sounds/Menu_Tick.wav'
import useSound from 'use-sound'
import TechBox from '../TechBox/TechBox'

const Technologies = () => {

    const [play] = useSound(tick)

    const menuTick = () => {
      play()
    }

    return (
        <div className='technologies'>
            <h1>Technologies</h1>
            <div className='tech-container'>
                <TechBox name={'JavaScript'} icon={'https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png'} />
            </div>
            <button className='back-button' onMouseEnter={menuTick}>Back</button>
        </div>
    )
}

export default Technologies