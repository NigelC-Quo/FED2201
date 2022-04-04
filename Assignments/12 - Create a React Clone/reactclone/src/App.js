import MainMenu from './components/MainMenu'
import Logo from './components/Logo';
import BGImage from './images/aztezgameplay.jpg';
import Caption from './components/Caption';
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
    </div>
  );
}

export default App;
