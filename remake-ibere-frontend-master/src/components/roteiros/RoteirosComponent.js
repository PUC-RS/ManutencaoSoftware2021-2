import React, { Component } from 'react';
import {
  ListItem,
  Divider,
  List,
  ListItemText,
  Collapse,
  Button
} from '@material-ui/core';
import {
  ExpandLess,
  ExpandMore,
  SubdirectoryArrowRight
} from '@material-ui/icons';

import MapIcon from '../../assets/icons/map_icon.svg';
import './RoteirosComponent.css';
import RoteiroService from '../../services/RoteiroService';
import InstituicaoRoteiro from '../instituicaoRoteiro/InstituicaoRoteiro';

export class Roteiros extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.roteirosService = new RoteiroService();
  }

  handleClick = e => {
    this.setState({ [e]: !this.state[e] });
  };

  renderRoteiro = roteiro => {
    return (
      <React.Fragment>
        <ListItem button onClick={this.handleClick.bind(this, roteiro.nome)}>
          <img src={MapIcon} alt="pointer" />
          <ListItemText className="titulo-roteiro" primary={roteiro.nome} />
          {this.state[roteiro.nome] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          component="li"
          in={this.state[roteiro.nome]}
          timeout="auto"
          unmountOnExit
        >
          <List disablePadding>
            <Divider />
            {roteiro.instituicoes.map(instituicao => {
              return (
                <InstituicaoRoteiro
                  instituicao={instituicao}
                  key={instituicao.id}
                />
              );
            })}
          </List>

          <div className="rotas">
            <Button
              variant="outlined"
              href={this.roteirosService.montaRoteiro(roteiro)}
            >
              <SubdirectoryArrowRight />
              ROTAS
            </Button>
          </div>
        </Collapse>
      </React.Fragment>
    );
  };

  renderRoteiroList = roteiro => {
    return (
      <ListItem onClick={this.handleClick.bind(this, roteiro.nome)}>
        <ListItemText primary={roteiro.name} />
      </ListItem>
    );
  };

  isNotRoteiroEmpty = roteiro => {
    if (roteiro != null) {
      this.renderRoteiro(roteiro);
    } else {
      this.renderRoteiroList(roteiro);
    }
  };

  render() {
    const { roteiros } = this.props;
    if (roteiros !== undefined) {
      return (
        <List>
          {roteiros.map(roteiro => {
            return (
              <React.Fragment key={roteiro.id}>
                {this.isNotRoteiroEmpty(roteiro)}
              </React.Fragment>
            );
          })}
          <Divider />
        </List>
      );
    } else return null;
  }
}

export default Roteiros;
