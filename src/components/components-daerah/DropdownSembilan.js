import React, { useState } from "react";
import Taber from "./Taber";
import Select from "react-select";
import "./Dropdown.css";
const DropdownSembilan = () => {
  const [code, setCode] = useState();
  const [state, setState] = useState();
  const negeri = ({
    labels: [
      { label: "Jelebu", value: "ngs-0" },
      { label: "Jempol", value: "ngs-1" },
      { label: "Kuala Pilah", value: "ngs-2"},
      { label: "Port Dickson", value: "ngs-3"},
      { label: "Rembau", value: "ngs-4"},
      { label: "Seremban", value: "ngs-5"},
      { label: "Tampin", value: "ngs-6" },
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

export default DropdownSembilan;
