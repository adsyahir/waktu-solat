import { useEffect, useState } from "react";
import "./ResultToday.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';

const ResultToday = (state) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://waktu-solat-api.herokuapp.com/api/v1/prayer_times.json?zon="+state.state,requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result.data[0].waktu_solat);
        console.log(result.data[0].waktu_solat);
      })
      .catch((error) => console.log("error", error));
  }, [state.state]);

  return (
  <Container>
    <div className="container-1">
      <figure class="snip1113 red">
        <img
          src="https://www.waktusolat.digital/images/sunrise.svg"
          alt="pr-sample1"
        />
        <figcaption>
          {data.slice(0, 1).map((elements, index) => (
            <div>
              <h3>
                <span>Imsak</span>
              </h3>
              <h4>{elements.time}</h4>
            </div>
          ))}
        </figcaption>
      </figure>
      <figure class="snip1113 red">
        <img
          src="https://www.waktusolat.digital/images/sunrise.svg"
          alt="pr-sample1"
        />
        <figcaption>
          {data.slice(1, 2).map((elements, index) => (
            <div>
              <h3>
                <span>Fajr</span>
              </h3>
              <h4>{elements.time}</h4>
            </div>
          ))}
        </figcaption>
      </figure>
      <figure class="snip1113 red">
        <img
          src="https://www.waktusolat.digital/images/sunrise.svg"
          alt="pr-sample1"
        />
        <figcaption>
          {data.slice(2, 3).map((elements, index) => (
            <div>
              <h3>
                <span>Sunrise</span>
              </h3>
              <h4>{elements.time}</h4>
            </div>
          ))}
        </figcaption>
      </figure>
      <figure class="snip1113 red">
        <img
          src="https://www.waktusolat.digital/images/zohor.svg"
          alt="pr-sample1"
        />
        <figcaption>
          {data.slice(3, 4).map((elements, index) => (
            <div>
              <h3>
                <span>Dhuhr</span>
              </h3>
              <h4>{elements.time}</h4>
            </div>
          ))}
        </figcaption>
      </figure>
      <figure class="snip1113 red">
        <img
          src="https://www.waktusolat.digital/images/Asar.svg"
          alt="pr-sample1"
        />
        <figcaption>
          {data.slice(4, 5).map((elements, index) => (
            <div>
              <h3>
                <span>Asr</span>
              </h3>
              <h4>{elements.time}</h4>
            </div>
          ))}
        </figcaption>
      </figure>
      <figure class="snip1113 red">
        <img
          src="https://www.waktusolat.digital/images/maghrib.svg"
          alt="pr-sample1"
        />
        <figcaption>
          {data.slice(5, 6).map((elements, index) => (
            <div>
              <h3>
                <span>Maghrib</span>
              </h3>
              <h4>{elements.time}</h4>
            </div>
          ))}
        </figcaption>
      </figure>
      <figure class="snip1113 red">
        <img
          src="https://www.waktusolat.digital/images/imsak.svg"
          alt="pr-sample1"
        />
        <figcaption>
          {data.slice(6, 7).map((elements, index) => (
            <div>
              <h3>
                <span>Isha</span>
              </h3>
              <h4>{elements.time}</h4>
            </div>
          ))}
        </figcaption>
      </figure>
      
    </div>
    </Container>
  );
};

export default ResultToday;
