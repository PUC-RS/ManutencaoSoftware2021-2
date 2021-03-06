import AbstractService from './AbstractService';

const BASE_URL = 'itinerario/';

const RESOURCES = {
  LISTA_ROTEIROS: BASE_URL
};

class RoteiroService extends AbstractService {
  listaRoteiros() {
    let URL = RESOURCES.LISTA_ROTEIROS;

    return this.axios.get(URL).then(response => {
      return response.data;
    });
  }

  montaRoteiro(roteiro) {
    let instituicoes = roteiro.instituicoes;
    let str = 'https://www.google.com/maps/dir/My+Location/';

    instituicoes.forEach(i => {
      str += `${i.latitude},${i.longitude}/`;
    });

    return str;
  }
}

export default RoteiroService;
