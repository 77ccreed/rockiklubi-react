import React, { Component } from 'react';
import "./../../Css/App.css";
import "./../../Css/Footer.css";


class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small pt-4">


        <div className="container text-center text-md-left">


          <div className="row">

            <div className="col-md-10  mx-auto my-md-4 my-0 mt-4 mb-1 d-flex flex-wrap align-content-center">             
                   
              <p className="mr-5 ml-2">
                        <i className="fa fa-home"></i> Valga, Aia 19, 68203 </p>
                   
                  
              <p className="mr-5 ml-2">
                        <i className="fa fa-envelope"></i> ivo@rockiklubi.ee</p>
                    
                   
              <p className="mr-5 ml-2">
                        <i className="fa fa-phone"></i> +(372) 521 0882</p>
                  
                   
              <p className="mr-5 ml-2"><i className="fas fa-money-check"></i> SEB Pank a/a 10220025716013</p>
                     
                    
                

                </div>

            <div className="col-md-2 mx-auto my-4 text-center d-flex flex-wrap align-content-center">

              <a href="https://www.facebook.com/Valga-Rockiklubi-141376155934174/" target="_blank" className="col-12 p-1 m-2" rel="noopener noreferrer">
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
        
