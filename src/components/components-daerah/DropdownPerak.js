import React, { useState } from "react";
import Taber from "./Taber";
import Select from "react-select";
import "./Dropdown.css";
const DropdownPerak = () => {
  const [code, setCode] = useState();
  const [state, setState] = useState();
  const negeri = ({
    labels: [
      { label: "Bagan Datuk", value: "prk-0"},
      { label: "Bagan Serai", value: "prk-1" },
      { label: "Batu Gajah", value: "prk-2"},
      { label: "Belum", value: "prk-3" },
      { label: "Beruas", value: "prk-4" },
      { label: "Bukit Larut", value: "prk-5" },
      { label: "Grik", value: "prk-6"},
      { label: "Ipoh", value: "prk-7"},
      { label: "Kampar", value: "prk-8" },
      { label: "Kampung Gajah", value: "prk-9", isDisabled:true},
      { label: "Kuala Kangsar", value: "prk-10" },
      { label: "Lenggong", value: "prk-11"},
      { label: "Lumut", value: "prk-12"},
      { label: "Parit", value: "prk-13" },
      { label: "Parit Buntar", value: "prk-14" },
      { label: "Pengkalan Hulu", value: "prk-15" },
      { label: "Pulau Pangkor", value: "prk-16" },
      { label: "Selama", value: "prk-17" },
      { label: "Sitiawan", value: "prk-18"},
      { label: "Slim River", value: "prk-19" },
      { label: "Seri Iskandar", value: "prk-20" },
      { label: "Sg. Siput", value: "prk-21" },
      { label: "Taiping", value: "prk-22" },
      { label: "Tanjung Malim", value: "prk-23"},
      { label: "Tapah", value: "prk-24" },
      { label: "Teluk Intan", value: "prk-25"},
      { label: "Temengor", value: "prk-26" },
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

export default DropdownPerak;
