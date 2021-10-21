import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

const MapWrapper = styled.section`
  height:50vh;
         
`;

const AnyReactComponent = ({ img}) => <img src={img} style={{height: 30}} alt="" />;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -17.767120, 
      lng: 31.007940, 
    },
    zoom: 20
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <MapWrapper style={{  width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyA2hOUbe8cOATKRLtA2iMA_LYrHTJG7txA '}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={-17.767120}
            lng={31.007940}
            img="./img/marker.jpg"
          />
        </GoogleMapReact>
      </MapWrapper>
    );
  }
}

export default SimpleMap;