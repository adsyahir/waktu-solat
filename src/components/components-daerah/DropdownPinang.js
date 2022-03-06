import React, { useState } from "react";
import Taber from "./Taber";
import Select from "react-select";
import "./Dropdown.css";
const DropdownPinang = () => {
  const [code, setCode] = useState();
  const [state, setState] = useState();
  const negeri = ({
    labels: [{ label: "Pulau Pinang", value: "png-0", id: 0 }],
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

export default DropdownPinang;
