import React, { useState } from "react";
import Taber from "./Taber";
import Select from "react-select";
import "./Dropdown.css";


const DropdownJohor = () => {
  const [code, setCode] = useState();
  const [state, setState] = useState();
  const negeri =({
    labels: [
      { label: "Batu Pahat", value: "jhr-0" },
      { label: "Gemas", value: "jhr-1" },
      { label: "Johor Bahru", value: "jhr-2"},
      { label: "Kluang", value: "jhr-3"},
      { label: "Kota Tinggi", value: "jhr-4"},
      { label: "Mersing", value: "jhr-5"},
      { label: "Muar", value: "jhr-6"},
      { label: "Pemanggil", value: "jhr-7"},
      { label: "Pontian", value: "jhr-8"},
      { label: "Pulau Aur", value: "jhr-9"},
      { label: "Segamat", value: "jhr-10" },
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
      <Select className="dropdown-1" options={negeri.labels} isSearchable onChange={handleChange} />
      </div>
      <Taber code={code} state={state}/>
    </div>
  );
};

export default DropdownJohor;
