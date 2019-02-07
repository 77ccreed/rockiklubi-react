import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

class Map extends React.Component {
  render() {
    return (
      <LeafletMap
        center={[57.78145679999999, 26.0550403]}
        zoom={18}
        
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={[57.78145679999999, 26.0550403]}>
          <Popup>
            Valga Rockiklubi MTÜ
          </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default Map