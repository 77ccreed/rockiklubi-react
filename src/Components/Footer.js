import React, { Component } from 'react';
import "./../Css/App.css";
import "./../Css/Footer.css";


class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small pt-4 mt-4">


        <div className="container text-center text-md-left">


          <div className="row">


            <div className="col-md-4 col-lg-5 mr-auto my-md-4 my-0 mt-4 mb-1">
              <h5 className="font-weight-bold mb-4">Valga Rockiklubi</h5>
              <p>Aastast 2002 - vanim rockiklubi Eestis. Omalaadne alternatiivklubi, kus propageeritakse elavat muusikat nii kodu
                kui välismaalt. "Valga Rockiklubi - koht, mis rockib!". See on koht, mis ei jäta külmaks! Klubi areneb kogu
              aeg, et pakkuda paremat elamust nii publikule kui esinejatele.</p>

            </div>


            <div className="col-md-4 col-lg-3 offset-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
                  <h5 className="font-weight-bold mb-4">Aadress</h5>

                  <ul className="list-unstyled">
                    <li>
                      <p>
                        <i className="fa fa-home mr-3"></i> Valga, Aia 19, 68203 </p>
                    </li>
                    <li>
                      <p>
                        <i className="fa fa-envelope mr-3"></i> ivo@rockiklubi.ee</p>
                    </li>
                    <li>
                      <p>
                        <i className="fa fa-phone mr-3"></i> +(372) 521 0882</p>
                    </li>
                    <li>
                  <p><i class="fas fa-money-check mr-3"></i> Arvelduskonto:</p>
                      <p>AS SEB Pank</p>
                      <p>a/a 10220025716013</p>
                    </li>
                  </ul>

                </div>

                  <div className="col-md-4 col-lg-2 mx-auto my-4 row text-center">

                    <h5 className="font-weight-bold mb-4 col-12">Leia meid!</h5>

              <a href="https://www.facebook.com/Valga-Rockiklubi-141376155934174/" target="_blank" className="col-12 p-1" rel="noopener noreferrer">
              FaceBook
                    </a>

             

              <a href="https://github.com/77ccreed/valga-rokiklubi" target="_blank" className="col-12 p-1" rel="noopener noreferrer">
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
        
