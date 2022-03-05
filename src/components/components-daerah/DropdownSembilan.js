import React, { useState } from "react";
import Taber from "./Taber";
import Select from "react-select";
import "./Dropdown.css";
const DropdownSembilan = () => {
  const [code, setCode] = useState();
  const [state, setState] = useState();
  const [negeri, setNegeri] = useState({
    labels: [
      { location: "Jelebu", value: "ngs-0", id: 0 },
      { location: "Jempol", value: "ngs-1", id: 1 },
      { location: "Kuala Pilah", value: "ngs-2", id: 2 },
      { location: "Port Dickson", value: "ngs-3", id: 3 },
      { location: "Rembau", value: "ngs-4", id: 4 },
      { location: "Seremban", value: "ngs-5", id: 5 },
      { location: "Tampin", value: "ngs-6", id: 6 },
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
