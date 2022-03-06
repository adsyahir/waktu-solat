import { useEffect, useState } from "react";
import "./ResultToday.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import './Result.css';

const ResultToday = (state) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://waktu-solat-api.herokuapp.com/api/v1/prayer_times.json?zon=" +
        state.state,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result.data[0].waktu_solat);
        
        console.log(result.data[0]);
      })
      .catch((error) => console.log("error", error));
  }, [state.state]);

  return (
    <Container>
    <div class="content">
  <h4 class="text_shadows">{state.state}</h4>
</div>
      <div className="container-1 d-non">
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
      <div class="page-content page-container d-no d-show" id="page-content">
        <div class="padding">
          <div class="row">
            <div class="col-sm-6">
              <div class="list list-row block">
                <div class="list-item " data-id="7">
                  <div>
                    <span class="w-48 ">
                      <img
                        src="https://www.waktusolat.digital/images/sunrise.svg"
                        alt="imsak"
                      ></img>
                    </span>
                  </div>
                  <div class="flex width"> Imsak</div>
                  {data.slice(0, 1).map((elements, index) => (
                    <div class="flex"> {elements.time}</div>
                  ))}
                  <div class="no-wrap">
                    <div class="item-date text-muted text-sm d-none d-md-block">
                      21 July
                    </div>
                  </div>
                </div>
                <div class="list-item" data-id="7">
                  <div>
                    <span class="w-48 ">
                      <img
                        src="https://www.waktusolat.digital/images/sunrise.svg"
                        alt="imsak"
                      ></img>
                    </span>
                  </div>
                  <div class="flex width"> Fajr</div>
                  {data.slice(1, 2).map((elements, index) => (
                    <div class="flex"> {elements.time}</div>
                  ))}
                  <div class="no-wrap">
                    <div class="item-date text-muted text-sm d-none d-md-block">
                      21 July
                    </div>
                  </div>
                </div>
                <div class="list-item" data-id="7">
                  <div>
                    <span class="w-48 ">
                      <img
                        src="https://www.waktusolat.digital/images/sunrise.svg"
                        alt="imsak"
                      ></img>
                    </span>
                  </div>
                  <div class="flex width"> Sunrise</div>
                  {data.slice(2, 3).map((elements, index) => (
                    <div class="flex"> {elements.time}</div>
                  ))}
                  <div class="no-wrap">
                    <div class="item-date text-muted text-sm d-none d-md-block">
                      21 July
                    </div>
                  </div>
                </div>
                <div class="list-item" data-id="7">
                  <div>
                    <span class="w-48 ">
                      <img
                        src="https://www.waktusolat.digital/images/zohor.svg"
                        alt="imsak"
                      ></img>
                    </span>
                  </div>
                  <div class="flex width"> Dhuhr</div>
                  {data.slice(3, 4).map((elements, index) => (
                    <div class="flex"> {elements.time}</div>
                  ))}
                  <div class="no-wrap">
                    <div class="item-date text-muted text-sm d-none d-md-block">
                      21 July
                    </div>
                  </div>
                </div>
                <div class="list-item" data-id="7">
                  <div>
                    <span class="w-48 ">
                      <img
                        src="https://www.waktusolat.digital/images/Asar.svg"
                        alt="Asr"
                      ></img>
                    </span>
                  </div>
                  <div class="flex width"> Asr</div>
                  {data.slice(4, 5).map((elements, index) => (
                    <div class="flex"> {elements.time}</div>
                  ))}
                  <div class="no-wrap">
                    <div class="item-date text-muted text-sm d-none d-md-block">
                      21 July
                    </div>
                  </div>
                </div>
                <div class="list-item" data-id="7">
                  <div>
                    <span class="w-48 ">
                      <img
                        src="https://www.waktusolat.digital/images/maghrib.svg"
                        alt="imsak"
                      ></img>
                    </span>
                  </div>
                  <div class="flex width"> Maghrib</div>
                  {data.slice(5, 6).map((elements, index) => (
                    <div class="flex"> {elements.time}</div>
                  ))}
                  <div class="no-wrap">
                    <div class="item-date text-muted text-sm d-none d-md-block">
                      21 July
                    </div>
                  </div>
                </div>
                <div class="list-item" data-id="7">
                  <div>
                    <span class="w-48 ">
                      <img
                        src="https://www.waktusolat.digital/images/imsak.svg"
                        alt="imsak"
                      ></img>
                    </span>
                  </div>
                  <div class="flex width"> Isha</div>
                  {data.slice(6, 7).map((elements, index) => (
                    <div class="flex"> {elements.time}</div>
                  ))}
                  <div class="no-wrap">
                    <div class="item-date text-muted text-sm d-none d-md-block">
                      21 July
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ResultToday;
