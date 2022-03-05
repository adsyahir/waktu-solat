import React, { useState, useEffect } from "react";
import "./components-daerah/DigitalClock.css";
import DateObject from "react-date-object";

var date = new DateObject();
date._format = "D/M/YYYY";

const DigitalClock = () => {
  const [time, setTime] = useState("");

  function formatTime(val) {
    if (val < 10) {
      return "0";
    } else {
      return "";
    }
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  function tick() {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    setTime(
      formatTime(h) + h + ":" + formatTime(m) + m + ":" + formatTime(s) + s
    );
  }

  let showDate = new Date();
  let displaytodaydate = showDate.getDate()+'/'+(showDate.getMonth()+1)+'/'+showDate.getFullYear();
  date.parse(displaytodaydate);
  let d = date.format("dddd DD MMMM YYYY");
  return (
    <div id="clock">
      <p class="date">{d}</p>
      <p class="time">{time}</p>
    </div>
  );
};
export default DigitalClock;
