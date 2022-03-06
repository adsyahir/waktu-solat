import React, { useState } from "react";
import Taber from "./Taber";
import Select from "react-select";
import "./Dropdown.css";
const DropdownKelantan = () => {
  const [code, setCode] = useState();
  const [state, setState] = useState();
  const negeri = ({
    labels: [
      { label: "Bachok", value: "ktn-0", id: 0 },
      { label: "Bertam", value: "ktn-1", id: 1 },
      { label: "Jeli", value: "ktn-2", id: 2 },
      { label: "Kota Bharu", value: "ktn-3", id: 3 },
      { label: "Kuala Krai", value: "ktn-4", id: 4 },
      { label: "Machang", value: "ktn-5", id: 5 },
      { label: "Mukim Chiku", value: "ktn-6", id: 6 },
      { label: "Mukim Galas", value: "ktn-7", id: 7 },
      { label: "Pasir Mas", value: "ktn-8", id: 8 },
      { label: "Pasir Puteh", value: "ktn-9", id: 9 },
      { label: "Tanah Merah", value: "ktn-10", id: 10 },
      { label: "Tumpat", value: "ktn-11", id: 11 },
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

export default DropdownKelantan;
