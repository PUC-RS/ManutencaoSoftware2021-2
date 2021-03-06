import React, { Component } from 'react';

import { IconButton, Box, Typography, AppBar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

class MapHeaderComponent extends Component {
  render() {
    return (
      <AppBar color="default">
        <Box display="flex" style={{ margin: '10px' }}>
          <IconButton onClick={this.props.open}>
            <MenuIcon />
          </IconButton>
          <Box style={{ paddingLeft: '16px' }}>
            <Typography variant="h6" style={{ marginBottom: '-5px' }}>
              Mapas Culturais
            </Typography>
            <Typography color="textSecondary" variant="subtitle1">
              Fundação Iberê
            </Typography>
          </Box>
        </Box>
      </AppBar>
    );
  }
}

export default MapHeaderComponent;
