import MainMenu from './components/MainMenu'
import Logo from './components/Logo';
import BGImage from './images/aztezgameplay.jpg';
import Caption from './components/Caption';
import ButtonPrompt from './components/ButtonPrompt';
import './App.css';

function App() {
  return (
    <div className="App">
     <img className="bg" src={BGImage} alt="aztezBG"/>
     <hr className='topBar'/>
     <Logo/>
     <hr/>
     <MainMenu/>
     <hr/>
     <Caption/>
     <ButtonPrompt/>
    </div>
  );
}

export default App;
