import React, { useState } from "react";
import Taber from "./Taber";
import Select from "react-select";
import "./Dropdown.css";
const DropdownSabah = () => {
  const [code , setCode] = useState();
  const [state, setState] = useState();
  const [negeri, setNegeri] = useState({
    labels: [
      { label: "Balong", value: "sbh-0", id: 0 },
      { label: "Bukit Garam", value: "sbh-1", id: 1 },
      { label: "Beaufort", value: "sbh-2", id: 2 },
      { label: "Beluran", value: "sbh-3", id: 3 },
      { label: "Gunung Kinabalu", value: "sbh-4", id: 4 },
      { label: "Kalabakan", value: "sbh-5", id: 5 },
      { label: "Keningau", value: "sbh-6", id: 6 },
      { label: "Kota Belud", value: "sbh-7", id: 7 },
      { label: "Kota Kinabalu", value: "sbh-8", id: 8 },
      { label: "Kota Marudu", value: "sbh-9", id: 9 },
      { label: "Kuala Penyu", value: "sbh-10", id: 10 },
      { label: "Kuamut", value: "sbh-11", id: 11 },
      { label: "Kudat", value: "sbh-12", id: 12 },
      { label: "Kunak", value: "sbh-13", id: 13 },
      { label: "Lahad Datu", value: "sbh-14", id: 14 },
      { label: "Long Pa Sia", value: "sbh-15", id: 15 },
      { label: "Membakut", value: "sbh-16", id: 16 },
      { label: "Merotai", value: "sbh-17", id: 17 },
      { label: "Nabawan", value: "sbh-18", id: 18 },
      { label: "Papar", value: "sbh-19", id: 19 },
      { label: "Penampang", value: "sbh-20", id: 20 },
      { label: "Pensiangan", value: "sbh-21", id: 21 },
      { label: "Penanggah", value: "sbh-22", id: 22 },
      { label: "Pitas", value: "sbh-23", id: 23 },
      { label: "Pulau Banggi", value: "sbh-24", id: 24 },
      { label: "Ranau", value: "sbh-25", id: 25 },
      { label: "Sahabat", value: "sbh-26", id: 26 },
      { label: "Sandakan", value: "sbh-27", id: 27 },
      { label: "Semawang", value: "sbh-28", id: 28 },
      { label: "Semporna", value: "sbh-29", id: 29 },
      { label: "Silabukan", value: "sbh-30", id: 30 },
      { label: "Sipitang", value: "sbh-31", id: 31 },
      { label: "Tambisan", value: "sbh-32", id: 32 },
      { label: "Tambunan", value: "sbh-33", id: 33 },
      { label: "Tawau", value: "sbh-34", id: 34 },
      { label: "Telupit", value: "sbh-35", id: 35 },
      { label: "Temanggong", value: "sbh-36", id: 36 },
      { label: "Tenom", value: "sbh-37", id: 37 },
      { label: "Terusan", value: "sbh-38", id: 38 },
      { label: "Tuaran", value: "sbh-39", id: 39 },
      { label: "Tungku", value: "sbh-40", id: 40 },
      { label: "Weston", value: "sbh-41", id: 41 },
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

export default DropdownSabah;
