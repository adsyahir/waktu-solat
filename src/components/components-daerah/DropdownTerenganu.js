import React, { useState } from "react";
import Taber from "./Taber";
import Select from "react-select";
import "./Dropdown.css";
const DropdownTerenganu = () =>             
{
    const[code,setCode] = useState();
    const[state,setState] = useState();
    const negeri = ({
        labels: [
          { label: "Besut", value: "trg-0", id: 0},
          { label: "Hulu Terrenganu", value: "trg-1", id: 1 },
          { label: "Kemaman Dungun", value: "trg-2", id: 2},
          { label: "Kuala Terengganu", value: "trg-3", id: 3},
          { label: "Marang", value: "trg-4", id: 4 },
          { label: "Setiu", value: "trg-5" , id: 5},
        ],
      });
      function handleChange(e) {
        setCode(e.value);
        setState(e.label);
        console.log(e.label);
      }
    return(
      <div  >
    <div className="flex-1">
      <Select className="dropdown-1" options={negeri.labels} isSearchable onChange={handleChange} />
      </div>
      <Taber code={code} state={state}/>
    </div>
    );
}

export default DropdownTerenganu;