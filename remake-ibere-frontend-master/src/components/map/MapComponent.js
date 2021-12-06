import React, { Component } from 'react';

import { Grid, Typography } from '@material-ui/core';

import SidebarComponent from '../../components/sidebar/SidebarComponent';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import CurrentLocation from '../currentLocation';
import InstituicaoService from '../../services/InstituicaoService';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.instituicaoService = new InstituicaoService();

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      defaultMarks: []
    };
  }

  async componentDidMount() {
    const listaInstituicoes = await this.instituicaoService.listaInstituicoes();
    this.setState({ defaultMarks: listaInstituicoes });
  }

  onMarkerClick = (props, marker) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  placeState() {
    if (this.state.selectedPlace.aberto) {
      return (
        <Typography className="aberto" style={{ color: 'green' }}>
          Aberto
        </Typography>
      );
    } else {
      return (
        <Typography className="fechado" style={{ color: 'red' }}>
          Fechado
        </Typography>
      );
    }
  }

  isPlaceOpen() {
    if (this.state.selectedPlace.printOpen) {
      this.placeState();
    } else {
      return <></>;
    }
  }

  render() {
    return (
      <Grid>
        <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
          <Marker onClick={this.onMarkerClick} name={'Localização atual'} />

          {this.state.defaultMarks.map((store, index) => (
            <Marker
              onClick={this.onMarkerClick}
              name={store.nome}
              endereco={store.endereco}
              printOpen={true}
              aberto={store.aberto}
              key={index}
              id={index}
              position={{
                lat: store.latitude,
                lng: store.longitude
              }}
            />
          ))}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <Grid>
                <Typography className="nome">
                  {this.state.selectedPlace.name}
                </Typography>

                <Typography className="endereco">
                  {this.state.selectedPlace.endereco}
                </Typography>

                {this.isPlaceOpen()}
              </Grid>
            </div>
          </InfoWindow>
        </CurrentLocation>
        <SidebarComponent />
      </Grid>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDvHSPp_Ov4xxoCtR7Rd1299bQ8hQYSWRI'
})(MapView);
