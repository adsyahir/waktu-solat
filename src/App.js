import './App.css';
import DigitalClock from './components/DigitalClock';
import Dropdown_negeri from './components/Dropdown_negeri';
import Title from './components/Title';

function App() {

  return (
    <div className="App">
    <Title/>
    <DigitalClock/>
      <Dropdown_negeri/>
    </div>
  );

}

export default App;
