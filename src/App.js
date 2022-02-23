import { useEffect, useState } from 'react';
import './App.css';
import Dropdown_negeri from './components/Dropdown_negeri';

function App() {
  
  const [mealData, setMealData] = useState("");

  useEffect( ()=>{
    getMealData();
  },[]);

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  function getMealData()
  {
    fetch("https://mpt.i906.my/api/prayer/kdh-4", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result.data);
      setMealData(result.data);
    })
    .catch(error => console.log('error', error));
  }
  return (
    <div className="App">
      <Dropdown_negeri/>
    </div>
  );

}

export default App;
