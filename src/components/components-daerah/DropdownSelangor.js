import React, { useState } from "react";
import Taber from "./Taber";
import Select from "react-select";
import "./Dropdown.css";
const DropdownSelangor = () => {
  const [code, setCode] = useState();
  const [state, setState] = useState();
  const [negeri, setNegeri] = useState({
    labels: [
      { label: "Gombak", value: "sgr-0", id: 0 },
      { label: "Hulu Langat", value: "sgr-1", id: 1 },
      { label: "Hulu Selangor", value: "sgr-2", id: 2 },
      { label: "Klang", value: "sgr-3", id: 3 },
      { label: "Kuala Langat", value: "sgr-4", id: 4 },
      { label: "Kuala Selangor", value: "sgr-5", id: 5 },
      { label: "Petaling", value: "sgr-6", id: 6 },
      { label: "Rawang", value: "sgr-7", id: 7 },
      { label: "Sabak Bernam", value: "sgr-8", id: 8 },
      { label: "Sepang", value: "sgr-9", id: 9 },
      { label: "Shah Alam", value: "sgr-10", id: 10 },
    ],
  });

  function handleChange(e) {
    setCode(e.value);
    setState(e.label);
    console.log(e.label);
  }
  return (
    <div  >
    <div className="flex-1">
      <Select className="dropdown-1" options={negeri.labels} isSearchable onChange={handleChange} />
      </div>
      <Taber code={code} state={state}/>
    </div>
  );
};

export default DropdownSelangor;
