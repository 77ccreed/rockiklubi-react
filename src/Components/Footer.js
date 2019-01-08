import React, {
  Component
} from 'react';
import "./../Css/App.css";

class Footer extends Component {
  render() {
    return (

   
 
      <section id="footer">
        <div className="container">
          <div className="row text-center text-xs-center text-sm-left text-md-left">
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>VALGA ROCKIKLUBI</h5>
         <p>
           Aastast 2002 - vanim rockiklubi Eestis. Omalaadne alternatiivklubi, kus propageeritakse elavat muusikat nii kodu kui välismaalt. "Valga Rockiklubi - koht, mis rockib!". See on koht, mis ei jäta külmaks! Klubi areneb kogu aeg, et pakkuda paremat elamust nii publikule kui esinejatele.
         </p>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>AADRESS</h5>
              <ul class="list-unstyled">
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
                  <p>Arvelduskonto:</p>
                  <p>AS SEB Pank</p>
                  <p>a/a 10220025716013</p>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>Quick links</h5>
              <ul className="list-unstyled quick-links">
                <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Home</a></li>
                <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>About</a></li>
                <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                <li><a href="https://wwwe.sunlimetech.com" title="Design and developed by"><i className="fa fa-angle-double-right"></i>Imprint</a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
              <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-facebook"></i></a></li>
                <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-twitter"></i></a></li>
                <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-instagram"></i></a></li>
                <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-google-plus"></i></a></li>
                <li className="list-inline-item"><a href="javascript:void();" target="_blank"><i className="fa fa-envelope"></i></a></li>
              </ul>
            </div>
			
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p><u><a href="https://www.nationaltransaction.com/">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
            <p class="h6">&copy All right Reversed.<a className="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">Sunlimetech</a></p>
          </div>
				
			</div>	
		</div >
	</section >
	
	
        
            );
          }
        }
        
export default Footer;