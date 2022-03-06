import React, { useState } from "react";
import Taber from "./Taber";
import Select from "react-select";
import "./Dropdown.css";
const DropdownPahang = () => {
  const [code, setCode] = useState();
  const [state, setState] = useState();
  const negeri = ({
    labels: [
      { label: "Bentong", value: "phg-0", id: 0 },
      { label: "Bera", value: "phg-1", id: 1 },
      { label: "Bukit Fraser", value: "phg-2", id: 2 },
      { label: "Cameron Highland", value: "phg-3", id: 3 },
      { label: "Chenor", value: "phg-4", id: 4 },
      { label: "Genting Sempah", value: "phg-5", id: 5 },
      { label: "Jerantut", value: "phg-6", id: 6 },
      { label: "Lipis", value: "phg-7", id: 7 },
      { label: "Kuantan", value: "phg-8", id: 8 },
      { label: "Maran", value: "phg-9", id: 9 },
      { label: "Muadzam Shah", value: "phg-10", id: 10 },
      { label: "Pekan", value: "phg-11", id: 11 },
      { label: "Pulau Tioman", value: "phg-12", id: 12 },
      { label: "Raub", value: "phg-13", id: 13 },
      { label: "Rompin", value: "phg-14", id: 14 },
      { label: "Temerloh", value: "phg-15", id: 15 },
    ],
  });

  function handleChange(e) {
    setCode(e.value);
    setState(e.label);
    console.log(e.label);
  }
  return (
    <div >
    <div className="flex-1">
      <Select className="dropdown-1" options={negeri.labels} isSearchable onChange={handleChange} />
      </div>
      <Taber code={code} state={state}/>
    </div>
  );
};

export default DropdownPahang;
