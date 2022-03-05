import React, { useState } from "react";
import DropdownJohor from "./components-daerah/DropdownJohor";
import DropdownKedah from "./components-daerah/DropdownKedah";
import DropdownKelantan from "./components-daerah/DropdownKelantan";
import DropdownMelaka from "./components-daerah/DropdownMelaka";
import DropdownPahang from "./components-daerah/DropdownPahang";
import DropdownPerak from "./components-daerah/DropdownPerak";
import DropdownPinang from "./components-daerah/DropdownPinang";
import DropdownSelangor from "./components-daerah/DropdownSelangor";
import DropdownSembilan from "./components-daerah/DropdownSembilan";
import DropdownWilayah from "./components-daerah/DropdownWilayah";
import DropdownTerenganu from "./components-daerah/DropdownTerenganu";
import DropdownSabah from "./components-daerah/DropdownSabah";
import DropdownSarawak from "./components-daerah/DropdownSarawak";
import Select from "react-select";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Negeri.css";


const Dropdown_label = () => {
  const options = [
    { label: 'Johor', value:'asdasd' },
    { label: 'Kedah', value: '1' },
    { label: 'Kelantan', value:'2'},
  ];
  const [label, setLabel] = useState({
    selected: null,
    labels: [
      { label: "Johor", value:'Johor'},
      { label: "Kedah", value:"Kedah"},
      { label: "Kelantan" , value:"Kelantan"},
      { label: "Melaka", value:"Melaka"},
      { label: "Negeri Sembilan" , value:"Negeri Sembilan"},
      { label: "Pahang" , value:"Pahang" },
      { label: "Perak" , value:"Perak"},
      { label: "Pulau Pinang" , value:"Pulau Pinang" },
      { label: "Sabah",  value:"Sabah"},
      { label: "Sarawak", value:"Sarawak"},
      { label: "Selangor", value:"Selangor"},
      { label: "Terengganu", value:"Terengganu"},
      { label: "Wilayah Persekutuan", value:"Wilayah Persekutuan"},
    ],
  });
  const [show, setShow] = useState("Wilayah Persekutuan");

  function handleChange(e) {
    setShow(e.value);
    console.log(e.value);
  }

  return (
    <div className="container">
    <div className="flex">
      <Select className="dropdown"
        options={label.labels}
        isSearchable
        onChange={handleChange}
        defaultValue={label.labels[12]}
      
      />
      </div>
      {show === "Johor" && <DropdownJohor />}
      {show === "Kedah" && <DropdownKedah />}
      {show === "Kelantan" && <DropdownKelantan />}
      {show === "Melaka" && <DropdownMelaka />}
      {show === "label Sembilan" && <DropdownSembilan />}
      {show === "Pahang" && <DropdownPahang />}
      {show === "Perak" && <DropdownPerak />}
      {show === "Pulau Pinang" && <DropdownPinang />}
      {show === "Sabah" && <DropdownSabah />}
      {show === "Sarawak" && <DropdownSarawak />}
      {show === "Selangor" && <DropdownSelangor />}
      {show === "Terengganu" && <DropdownTerenganu />}
      {show === "Wilayah Persekutuan" && <DropdownWilayah />}
    </div>
  );
};

export default Dropdown_label;
