import './App.css';
import logo from './name-logo.png'

function App() {
  return (
    <main>
      <img className='logo' src={logo}/>
      <div className='link-container'>
        <p>Software Development</p>
        <p>Photography</p>
        <p>Achievements</p>
        <p>About Me</p>
        <p>Resume</p>
      </div>
    </main>
  );
}

export default App;
