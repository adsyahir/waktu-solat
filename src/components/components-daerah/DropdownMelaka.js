import React, { useState } from "react";
import Taber from "./Taber";
import Select from "react-select";
import "./Dropdown.css";
const DropdownMelaka = () => {
  const [code, setCode] = useState();
  const [state, setState] = useState();
  const [negeri, setNegeri] = useState({
    labels: [
      { label: "Alor Gajah", value: "mlk-0", id: 0 },
      { label: "Bandar Melaka", value: "mlk-1", id: 1 },
      { label: "Jasin", value: "mlk-2", id: 2 },
      { label: "Masjid Tanah", value: "mlk-3", id: 3 },
      { label: "Merlimau", value: "mlk-4", id: 4 },
      { label: "Nyalas", value: "mlk-5", id: 5 },
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

export default DropdownMelaka;
