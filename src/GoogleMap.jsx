import React, { Component } from 'react';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';

class GoogleMap extends Component {
    state = { }
    render() {
        return ( 
        <div>
                <Map google={this.props.google} zoom={14}>
                <Marker name={'Current location'} />
            </Map>
            </div>
         );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCDS1ORV6UWK9q_FvooyR1e-uuVTryf7hE'
  })(GoogleMap);