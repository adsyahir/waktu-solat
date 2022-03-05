import React, { useState } from "react";
import Taber from "./Taber";
import Select from "react-select";
import "./Dropdown.css";


const DropdownWilayah = () => {
  const [code, setCode] = useState("wlp-0");
  const [state, setState] = useState("Kuala Lumpur");
  const [negeri, setNegeri] = useState({
    labels: [
      { label: "Kuala Lumpur", value: "wlp-0" },
      { label: "Labuan", value: "wlp-1" },
      { label: "Putrajaya", value: "wlp-2" },
    ],
  });

  function handleChange(e) {
    setCode(e.value);
    setState(e.label);
    console.log(e.label);
  }
  return (
    <div>
        <div className="flex-1">
      <Select
      className="dropdown-1"
        options={negeri.labels}
        isSearchable
        defaultValue={negeri.labels[0]}
        onChange={handleChange}
      />
      </div>
      <Taber code={code} state={state}/>
    
    </div>
  );
};


export default DropdownWilayah;
