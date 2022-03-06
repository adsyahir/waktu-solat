import './App.css';
import DigitalClock from './components/DigitalClock';
import Dropdown_negeri from './components/DropdownNegeri';
import Title from './components/Title';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
    <Title/>
    <DigitalClock/>
      <Dropdown_negeri/>
    <Footer/>
    </div>
  );

}

export default App;
