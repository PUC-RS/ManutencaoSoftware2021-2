const {ValidacaoException} = require("../../utils/Exceptions");
const calendarioUtils = require("../../utils/CalendarioUtils");
const diasSemana = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'];
const telefoneRegex = /^[(]\\d{2}[)]\\d{8,9}$/;


const validarInstituicao = (instituicao) => {
    if(instituicao.horarios){
        instituicao.horarios
            .forEach(horario => validarDia(horario));
    }
    if(instituicao.telefone.toLowerCase().match(telefoneRegex)){
        throw new ValidacaoException('telefone', `${instituicao.telefone} nao é um telefone valido`);
    }
};

const validarDia = (horario) => {
    if(!diasSemana.includes(horario.dia)){
        throw new ValidacaoException('horario', `${horario.dia} nao é um dia de semana valido`);
    }
};

const validarInstituicaoAberta = (instituicao) => {
    let aberto = false;

    for (let hora of instituicao.horarios) {
        let objetoHorario = hora;

        if (calendarioUtils.getDiaAtual() === objetoHorario.dia) {
            if (calendarioUtils.temHorarioCorrespondente(objetoHorario)) {
                aberto = true;
            }
        }
    }

    return aberto;
};


module.exports = {
    validarDia,
    validarInstituicao,
    validarInstituicaoAberta
};