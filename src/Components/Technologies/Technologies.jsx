import './Technologies.css'
import tick from './../../Sounds/Menu_Tick.wav'
import useSound from 'use-sound'
import TechBox from '../TechBox/TechBox'

const Technologies = ({handleMenuClick, sound}) => {

    const [play] = useSound(tick)

    const menuTick = () => {
        if(sound) play()
    }

    return (
        <div className='technologies'>
            <h1>Technologies</h1>
            <div className='tech-container'>
                <TechBox name={'React'} icon={'https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png'} />
                <TechBox name={'JavaScript'} icon={'https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png'} />
                <TechBox name={'CSS'} icon={'https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png'} />
                <TechBox name={'HTML'} icon={'https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png'} />
                <TechBox name={'Next.js'} icon={'https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704'} />
                <TechBox name={'TypeScript'} icon={'https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png'} />
                <TechBox name={'Tailwind CSS'} icon={'https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png'} />
                <TechBox name={'GraphQL'} icon={'https://user-images.githubusercontent.com/25181517/192107856-aa92c8b1-b615-47c3-9141-ed0d29a90239.png'} />
                <TechBox name={'Mocha'} icon={'https://user-images.githubusercontent.com/25181517/201476630-f47cfff6-fdee-4ee1-9092-1793b71b1ca3.png'} />
                <TechBox name={'Chai'} icon={'https://user-images.githubusercontent.com/25181517/201476472-d2f5f644-cfc9-43e5-96d3-c8f40f18b5cb.png'} />
                <TechBox name={'Cypress'} icon={'https://user-images.githubusercontent.com/68279555/200387386-276c709f-380b-46cc-81fd-f292985927a8.png'} />
                <TechBox name={'Postman'} icon={'https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png'} />
            </div>
            <button className='back-button' id='menu' onMouseEnter={menuTick} onClick={handleMenuClick}>Back</button>
        </div>
    )
}

export default Technologies