import React, {
  Component
} from 'react';

class Map extends Component {

  state = {
    myLatLng: { lat: 57.78145679999999, lng: 26.0550403 },
    map: "",
  }

  // Initialize Google Map when DOM was loaded and call script loading function and
  // handle Map errors.
  componentDidMount() {
    window.initMap = this.initMap;

    loadMapJS('https://maps.googleapis.com/maps/api/js?&key=AIzaSyDyA_DwacE3TR1fCdwU1fk-LEem_JSzA2M&v=3&callback=initMap')

    window.gm_authFailure = this.gm_authFailure
  }

  // https://developers.google.com/maps/documentation/javascript/tutorial#MapOptions
  // Initialize Google Map
  initMap = () => {

   let map = new window.google.maps.Map(document.getElementById("map"), {
      center: {
        lat: 57.774995,
        lng: 26.034705
      },
      zoom: 6
    });

    let contentString = '<div id="content">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h6 id="firstHeading" class="firstHeading">Valga Rockiklubi MTÜ</h6>' +
      '' +
      '' +
      '</p>' +
      '<p><a href="https://www.google.com/maps/place/Valga+Rockiklubi+MT%C3%9C/@57.775373,26.035553,18z/data=!4m5!3m4!1s0x0:0xd23eacb70359dd5f!8m2!3d57.774996!4d26.0347024?hl=en-US"  target="_blank">' +
      'Vaata Google Mapsist</a> ' +
      '</p>' +
      '</div>' +
      '</div>';

    let infowindow = new window.google.maps.InfoWindow({
      content: contentString
    });
    const klubi = {
      lat: 57.774995,
      lng: 26.034702
    }
    var marker = new window.google.maps.Marker({
      position: klubi,
      map: map,
      title: 'Valga Rockiklubi'
    });

    marker.addListener('click', function () {
      infowindow.open(map, marker);
    });
    
  };

  //https://developers.google.com/maps/documentation/javascript/events#auth-errors
  // Handle Google Maps error
  gm_authFailure() {
    window.alert("Sorry, Google Maps not working!");
  }

  render() {
    return (
      <div id="map" role="application" tabIndex="-1"></div>
    )
  }
}

export default Map;

// https://www.klaasnotfound.com/2016/11/06/making-google-maps-work-with-react/
// Script loading function which is called after the React app has been initialized
// and rendered into the DOM.
function loadMapJS(src) {
  let ref = window.document.getElementsByTagName("script")[0];
  let script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  script.onerror = function () {
    document.write('Google Maps can\'t be loaded');
  };
  ref.parentNode.insertBefore(script, ref);
}