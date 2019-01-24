import React, { Component } from 'react';
import "./../../Css/App.css";
import "./../../Css/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome } from '@fortawesome/free-solid-svg-icons'


class Footer extends Component {
render() {
return (
<footer className="page-footer font-small pt-4">

  <div className="container text-center text-md-left">


    <div className="row">

      <div className="col-md-10  mx-auto my-md-4 my-0 mt-4 mb-1 d-flex flex-wrap align-content-center icons">

        <p className="mr-5 ml-2">
            <FontAwesomeIcon icon={faHome} /> Valga, Aia 19, 68203 </p>


        <p className="mr-5 ml-2">
            <svg aria-hidden="true" data-prefix="fas" data-icon="envelope" className="svg-inline--fa fa-envelope fa-fw"
            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
          </svg> ivo@rockiklubi.ee</p>


        <p className="mr-5 ml-2">
            <svg aria-hidden="true" data-prefix="fas" data-icon="phone" className="svg-inline--fa fa-phone fa-fw" role="img"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
          </svg> +(372) 521 0882</p>


        <p className="mr-5 ml-2">
            <svg aria-hidden="true" data-prefix="fas" data-icon="money-check" className="svg-inline--fa fa-money-check fa-fw"
            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path fill="currentColor" d="M0 448c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V128H0v320zm448-208c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v32c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-32zm0 120c0-4.42 3.58-8 8-8h112c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H456c-4.42 0-8-3.58-8-8v-16zM64 264c0-4.42 3.58-8 8-8h304c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm0 96c0-4.42 3.58-8 8-8h176c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zM624 32H16C7.16 32 0 39.16 0 48v48h640V48c0-8.84-7.16-16-16-16z"></path>
          </svg> SEB Pank a/a 10220025716013</p>




      </div>

      <div className="col-md-2 mx-auto my-4 text-center d-flex flex-wrap align-content-center">

        <a href="https://www.facebook.com/Valga-Rockiklubi-141376155934174/" target="_blank" className="col-12 p-1 m-2"
          rel="noopener noreferrer">
          FaceBook
        </a>

        <a href="https://github.com/77ccreed/valga-rokiklubi" target="_blank" className="col-12 p-1 m-2" rel="noopener noreferrer">
          GitHub
        </a>

      </div>

    </div>


  </div>



  <div className="text-center py-3">© 2019 Copyright: Valga Rockiklubi MTÜ
  </div>


</footer>


);
}
}

export default Footer;