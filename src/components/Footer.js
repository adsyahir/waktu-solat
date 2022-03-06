import "./Footer.css";

const Footer = () => {
  return (
    <div class="createdBy">
      <label>
        Created by{" "}
        <a href="https://github.com/adsyahir" rel="noreferrer" target="_blank">
          Adam Syahir
        </a>
        &nbsp;|&nbsp;
        <a
          href="http://www.adsyahir.com/index"
          rel="noreferrer"
          target="_blank"
        >
          adsyahir.com
        </a>
      </label>
      <label>
        API from{" "}
        <a href="https://mpt.i906.my/api.html" rel="noreferrer" target="_blank">
          JSON API - Malaysia Prayer Times
        </a>
        &nbsp;|&nbsp;
        <a
          href="https://zaimramlan.github.io/waktu-solat-api/"
          rel="noreferrer"
          target="_blank"
        >
          Waktu Solat JSON API{" "}
        </a>
      </label>
    </div>
  );
};

export default Footer;
