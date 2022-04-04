import MainMenu from './components/MainMenu'
import Logo from './components/Logo';
import BGImage from './images/aztezgameplay.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
     <img className="bg" src={BGImage} alt="aztezBG"/>
     <hr/>
     <Logo/>
     <hr/>
     <MainMenu/>
     <hr/>
    </div>
  );
}

export default App;
