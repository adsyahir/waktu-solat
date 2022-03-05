import React, { useState } from "react";
import Taber from "./Taber";
import Select from "react-select";
import "./Dropdown.css";
const DropdownPerak = () => {
  const [code, setCode] = useState();
  const [state, setState] = useState();
  const [negeri, setNegeri] = useState({
    labels: [
      { location: "Bagan Datoh", value: "prk-0", id: 0 },
      { location: "Bagan Serai", value: "prk-1", id: 1 },
      { location: "Batu Gajah", value: "prk-2", id: 2 },
      { location: "Belum", value: "prk-3", id: 3 },
      { location: "Beruas", value: "prk-4", id: 4 },
      { location: "Bukit Larut", value: "prk-5", id: 5 },
      { location: "Grik", value: "prk-6", id: 6 },
      { location: "Ipoh", value: "prk-7", id: 7 },
      { location: "Kampar", value: "prk-8", id: 8 },
      { location: "Kampung Gajah", value: "prk-9", id: 9 },
      { location: "Kuala Kangsar", value: "prk-10", id: 10 },
      { location: "Lenggong", value: "prk-11", id: 11 },
      { location: "Lumut", value: "prk-12", id: 12 },
      { location: "Parit", value: "prk-13", id: 13 },
      { location: "Parit Buntar", value: "prk-14", id: 14 },
      { location: "Pengkalan Hulu", value: "prk-15", id: 15 },
      { location: "Pulau Pangkor", value: "prk-16", id: 16 },
      { location: "Selama", value: "prk-17", id: 17 },
      { location: "Setiawan", value: "prk-18", id: 18 },
      { location: "Slim River", value: "prk-19", id: 19 },
      { location: "Sri Iskandar", value: "prk-20", id: 20 },
      { location: "Sungai Siput", value: "prk-21", id: 21 },
      { location: "Taiping", value: "prk-22", id: 22 },
      { location: "Tanjung Malim", value: "prk-23", id: 23 },
      { location: "Tapah", value: "prk-24", id: 24 },
      { location: "Teluk Intan", value: "prk-25", id: 25 },
      { location: "Temengor", value: "prk-26", id: 26 },
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
