import React, { Component } from 'react';
import "./../../../Css/App.css";
import "./../../../Css/Header.css";
import { Spring } from 'react-spring'


class HeaderLv extends Component {
  render() {
    return (
      <header className="App-header">

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}>
                {props => <div style={props}>
                  <h1 className="display-4 mt-3 mr-3 ml-3 mb-1  ml-md-5 text-left"><span className="Header-text2">
                    Balts</span> klints klubs</h1>
                  <h6 className=" ml-3 ml-md-5 text-left">
                    Kopš 2002. gada - vecākais klints klubs Igaunijā</h6>
                  </div>}
              </Spring>

            </div>

          </div>
        </div>

      </header>
    );
  }
}

export default HeaderLv;