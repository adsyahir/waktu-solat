import React, { useState } from "react";
import Dropdown_johor from './components-daerah/Dropdown_johor';
import Dropdown_kedah from "./components-daerah/Dropdown_kedah";

const Dropdown_negeri = () => {

    const [negeri, setNegeri] = useState({
        selected: null,
        negeris: [
          { negeri: "Johor", id: 0 },
          { negeri: "Kedah", id: 1 },
          { negeri: "Kelantan", id: 2 },
          { negeri: "Melaka", id: 3 },
          { negeri: "Negeri Sembilan", id: 4 },
          { negeri: "Pahang", id: 5 },
          { negeri: "Perak", id: 6 },
          { negeri: "Pulau Pinang", id: 7 },
          { negeri: "Sabah", id: 8 },
          { negeri: "Sarawak", id: 9 },
          { negeri: "Selangor", id: 10 },
          { negeri: "Terengganu", id: 11 },
          { negeri: "Wilayah Persekutuan", id: 12 },
        ],
      });
      const [hide,setHide] = useState(false);

    function handleChange(e)
    {
      setNegeri({ ...negeri, selected: e.target.value });      
      for(let i=0; i < negeri.negeris.length; i++)
      {
        if(negeri.selected === negeri.negeris[i].negeri)
        {
          setHide(true)
        }
      }
    }
            
    return ( 
        <div className="Dropdown_daerah">
        <h1>{negeri.selected}</h1>
         <select name="dropdown-negeri" onChange={(e)=> handleChange(e)}>
         {negeri.negeris.map((elements, index) => (
            <option key={index} value={elements.negeri}>{elements.negeri}</option>
          ))}
          </select>
          <Dropdown_johor  hidden={hide} />
          <Dropdown_kedah  hidden={hide}/>
        </div>
     );
}
 
export default Dropdown_negeri;