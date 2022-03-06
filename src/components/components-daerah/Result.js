import React from "react";
import { useEffect, useState } from "react";
import timestamp from "unix-timestamp";
import DateObject from "react-date-object";
import './Result.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import  Select from 'react-select';


var date = new DateObject();
date._format = "MMM DD YYYY";

var dat = new DateObject();
dat._format = "DD/MM/YYYY";


export const Result = ({code,stat}) => {
  const [output, setOutput] = useState([]);
  const [time, setTime] = useState([]);
  const data=([]);
  const hari= ([]);
  const [search, setSearch] = useState([]);
  const kari = ([]);
  const d = ([]);
  

  useEffect(() => {
    console.log(code);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("https://mpt.i906.my/api/prayer/" + code, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        setOutput(result.data);
        setTime(result.data.times);
      })
      .catch((error) => console.log("error", error));
  }, [code]);

  function outputList() {
    data.length = 0;
    hari.length = 0;
    for (let x = 0; x < time.length; x++) {
      for (let z = 0; z < 6; z++) {
        let j = timestamp.toDate(time[x][z]);
        data.push(j.toString().slice(15, 21));
        date.parse(j.toString().slice(4, 15));
        hari.push(date.format("DD/MM/YYYY"));
      }
    }
  }
  outputList();

  const unique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  const uniqueHari = hari.filter(unique);

  function insertArray() {
     kari.length = 0;
    for (let i = 0; i < uniqueHari.length; i++) {
      kari[i] = [];
    }

    let p = 0;
    for (let i = 0; i < uniqueHari.length; i++) {
      for (let j = kari[i].length; j < 1; j++) {
        kari[i][j] = uniqueHari[p];
        p++;
      }
    }
    let t = 0;
    for (let i = 0; i < uniqueHari.length; i++) {
      for (let j = 1; j < 7; j++) {
        kari[i][j] = data[t];
        t++;
      }
    }
    
    d.length = 0;
    for(let m = 0; m < uniqueHari.length; m++)
    {
      d.push({
        id: m,
        label:uniqueHari[m],
        value:uniqueHari[m],
      });
    }

  }
  console.log(d);

  insertArray();

  function handleChange(e)
  {
   if (e !== null)
   {
    setSearch(e.value)
   }
   else
   {
    setSearch(null)
   }    
  }
  console.log(output);


  return (
    <Container>
    <div class="content">
  <h4 class="text_shadows">{stat}</h4>
</div>
      <div className="flex-2">
      <Select
        isClearable
        className="dropdown-2"
        isSearchable={true}
        onChange={handleChange}
        placeholder="Filter by date"
        options={d} 
      />
      </div>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Date</th>
            <th>Fajr</th>
            <th>Sunrise</th>
            <th>Dhuhr</th>
            <th>Asr</th>
            <th>Maghrib</th>
            <th>Isha</th>
          </tr>
        </thead>
        <tbody>
          {kari.slice(0, kari.length).map((item, index) => {
            dat.parse(item[0]);
            let d = dat.format("ddd");
            const dae = item[0];
            const filterValue = search;
            if ((!filterValue) || (dae.indexOf(filterValue)!==-1))
            {
            return (
              <tr key={index}>
                <td data-label="Day">{d}</td>
                <td data-label="Date">{item[0]}</td>
                <td data-label="Fajr">{item[1]}</td>
                <td data-label="Sunrise">{item[2]}</td>
                <td data-label="Dhuhr">{item[3]}</td>
                <td data-label="Asr">{item[4]}</td>
                <td data-label="Maghrib">{item[5]}</td>
                <td data-label="Isha">{item[6]}</td>
              </tr>
            );
            }
            else
            {
              return(<div></div>)
            }
          })}
        </tbody>
      </table>
      
    </Container>
  );
};
export default Result;
