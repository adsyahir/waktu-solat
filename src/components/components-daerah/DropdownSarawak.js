import React, { useState } from "react";
import Taber from "./Taber";
import Select from "react-select";
import "./Dropdown.css";
const DropdownSarawak = () => {
  const [code, setCode] = useState();
  const [state, setState] = useState();
  const [negeri, setNegeri] = useState({
    label: [
      { label: "Bau", value: "swk-0", id: 0 },
      { label: "Bekenu", value: "swk-1", id: 1 },
      { label: "Belaga", value: "swk-2", id: 2 },
      { label: "Belawai", value: "swk-3", id: 3 },
      { label: "Belingan", value: "swk-4", id: 4 },
      { label: "Betong", value: "swk-5", id: 5 },
      { label: "Bintulu", value: "swk-6", id: 6 },
      { label: "Bitangor", value: "swk-7", id: 7 },
      { label: "Dalat", value: "swk-8", id: 8 },
      { label: "Daro", value: "swk-9", id: 9 },
      { label: "Debak", value: "swk-10", id: 10 },
      { label: "Engkelili", value: "swk-11", id: 11 },
      { label: "Igan", value: "swk-12", id: 12 },
      { label: "Julau", value: "swk-13", id: 13 },
      { label: "Kabong", value: "swk-14", id: 14 },
      { label: "Kanowit	", value: "swk-15", id: 15 },
      { label: "Kapit", value: "swk-16", id: 16 },
      { label: "Kuching", value: "swk-17", id: 17 },
      { label: "Lawas", value: "swk-18", id: 18 },
      { label: "Limbang", value: "swk-19", id: 19 },
      { label: "Lingga", value: "swk-20", id: 20 },
      { label: "Lundu", value: "swk-21", id: 21 },
      { label: "Marudi", value: "swk-22", id: 22 },
      { label: "Matu", value: "swk-23", id: 23 },
      { label: "Meludam", value: "swk-24", id: 24 },
      { label: "Miri", value: "swk-25", id: 25 },
      { label: "Niah", value: "swk-26", id: 26 },
      { label: "Oya", value: "swk-27", id: 27 },
      { label: "Pusa", value: "swk-28", id: 28 },
      { label: "Rajang", value: "swk-29", id: 29 },
      { label: "Roban", value: "swk-30", id: 30 },
      { label: "Samarahan", value: "swk-31", id: 31 },
      { label: "Saratok", value: "swk-32", id: 32 },
      { label: "Sarikei", value: "swk-33", id: 33 },
      { label: "Sebauh", value: "swk-34", id: 34 },
      { label: "Sebuyau", value: "swk-35", id: 35 },
      { label: "Sematan", value: "swk-36", id: 36 },
      { label: "Serian", value: "swk-37", id: 37 },
      { label: "Sibu", value: "swk-38", id: 38 },
      { label: "Sibuti	", value: "swk-39", id: 39 },
      { label: "Simunjan	", value: "swk-40", id: 40 },
      { label: "Song	", value: "swk-41", id: 41 },
      { label: "Spaoh", value: "swk-42", id: 42 },
      { label: "Sri Aman	", value: "swk-43", id: 43 },
      { label: "Sundar", value: "swk-44", id: 44 },
      { label: "Tatau", value: "swk-45", id: 45 },
      { label: "Terusan", value: "swk-46", id: 46 },
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

export default DropdownSarawak;
