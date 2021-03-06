import React, { Component } from 'react';

import { Box, Typography } from '@material-ui/core';

import logo from '../../assets/images/logo_fundacao_ibere_camargo.png';
import './SidebarHeaderComponent.css';

class SidebarHeaderComponent extends Component {
  render() {
    return (
      <Box p={2} display="flex">
        <Box>
          <Typography
            component="div"
            id={'simple-tabpanel'}
            aria-labelledby={'simple-tab'}
            variant="h6"
          >
            Mapas Culturais
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Fundação Iberê
          </Typography>
        </Box>
        <Box className="sidebar-header-logo">
          <img width="60vw" src={logo} alt="logo" />
        </Box>
      </Box>
    );
  }
}

export default SidebarHeaderComponent;
