import React from 'react';
import ReactDOM from 'react-dom';

class Map extends React.Component{
 

  initialize() {
    var lat = parseFloat(this.props.lat);
    var lng = parseFloat(this.props.lon);
    var myPosition = new google.maps.LatLng(lat, lng);
    var mapDiv = document.getElementById('map');
    var mapOptions = {
      center: myPosition,
      zoom: 8
    };
    var map = new google.maps.Map(ReactDOM.findDOMNode(this), mapOptions);
    var marker = new google.maps.Marker({ position: myPosition, title: 'Hi', map: map });
  }
  componentDidMount() {
    this.initialize();
  }
  render() {
    return <div className="map"/>
  }
}
//ReactDOM.render(<Map lat={-34.397} lon={150.644} />, document.getElementById('map'));

export default Map;