import React, { useState } from "react";
import Taber from "./Taber";
import Select from "react-select";
import "./Dropdown.css";

const Dropdown_kedah = () => {
  const [code, setCode] = useState();
  const [state, setState] = useState();
  const [negeri, setNegeri] = useState({
    activeObject: null,
    labels: [
      { label: "Baling", value: "kdh-0", id: 0 },
      { label: "Bandar Baharu", value: "kdh-1", id: 1 },
      { label: "Kota Setar", value: "kdh-2", id: 2 },
      { label: "Kuala Muda", value: "kdh-3", id: 3 },
      { label: "Kubang Pasu", value: "kdh-4", id: 4 },
      { label: "Kulim", value: "kdh-5", id: 5 },
      { label: "Langkawi", value: "kdh-6", id: 6 },
      { label: "Padang Terap", value: "kdh-7", id: 7 },
      { label: "Pendang", value: "kdh-8", id: 8 },
      { label: "Pokok Sena", value: "kdh-9", id: 9 },
      { label: "Puncak Gunung Jerai", value: "kdh-10", id: 10 },
      { label: "Sik", value: "kdh-11", id: 11 },
      { label: "Yan", value: "kdh-12", id: 12 },
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

export default Dropdown_kedah;
