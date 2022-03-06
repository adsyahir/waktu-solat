import './App.css';
import DigitalClock from './components/components-daerah/DigitalClock';
import DropdownNegeri from './components/DropdownNegeri';
import Title from './components/Title';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
    <Title/>
    <DigitalClock/>
      <DropdownNegeri/>
    <Footer/>
    </div>
  );

}

export default App;
