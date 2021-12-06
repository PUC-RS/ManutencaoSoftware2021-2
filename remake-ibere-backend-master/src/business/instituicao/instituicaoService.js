const instituicaoRepository = require("../../infrastructure/instituicao/instituicaoRepository");
const {ResultadoVazioException, BussinessException} = require("../../utils/Exceptions");
const instituicaoValidator = require("./instituicaoValidator");

module.exports = {
    salvarInstituicao: function (inst) {
        return new Promise((resolve, reject) => {
            try {
                instituicaoValidator.validarInstituicao(inst);
            } catch (err) {
                reject(err);
            }
            instituicaoRepository.salvarInstituicao(inst)
                .then(instituicao => {
                    resolve(instituicao);
                }).catch(err => {
                reject(new BussinessException('instituicao', err));
            });
        });
    },

    buscarInstituicaoPorID: function (id) {
        return new Promise((resolve, reject) => {
            instituicaoRepository.buscarInstituicaoPorID(id).then(instituicao => {
                if (instituicao == null) {
                    throw new ResultadoVazioException('instituicao', instituicao);
                }
                const aberto = instituicaoValidator.validarInstituicaoAberta(instituicao);
                const instituicaoFormatada = this.ajustarInstituicao(instituicao, aberto);
                resolve(instituicaoFormatada);
            }).catch(err => {
                if (err.name != 'ResultadoVazioException') {
                    reject(new BussinessException('instituicao', err));
                } else {
                    reject(err);
                }
            });
        });
    },

    buscarInstituicoes: function () {
        return new Promise((resolve, reject) => {

            instituicaoRepository.buscarInstituicoes()
                .then(instituticoes => {
                    if (instituticoes.length < 1) {
                        throw new ResultadoVazioException('instituicao', instituticoes);
                    }

                    let listaInstituicoes = [];

                    for (let instituicao of instituticoes) {
                        let aberto = instituicaoValidator.validarInstituicaoAberta(instituicao);

                        listaInstituicoes.push({
                            id: instituicao.id,
                            latitude: instituicao.latitude,
                            longitude: instituicao.longitude,
                            nome: instituicao.nome,
                            endereco: instituicao.endereco,
                            aberto: aberto
                        });
                    }
                    resolve(listaInstituicoes);
                })
                .catch(err => {
                    if (err.name === 'ResultadoVazioException') {
                        reject(err);
                    } else {
                        reject(new BussinessException('instituicao', err));
                    }
                });
        });
    },

    atualizarInstituicao: function (id, instituicao) {
        return new Promise(((resolve, reject) => {
            instituicaoRepository.atualizarInstituicao(id, instituicao)
                .then(() => {
                    resolve();
                }).catch(err => {
                reject(new BussinessException('instituicao', err));
            });
        }));
    },

    atualizarInstituicaoHorarios: function (id, horarios) {
        return new Promise(((resolve, reject) => {
            try {
                horarios.forEach(horario => instituicaoValidator.validarDia(horario));
            } catch (err) {
                reject(err);
            }
            instituicaoRepository.atualizarInstituicaoHorarios(id, horarios)
                .then(() => {
                    resolve();
                }).catch(err => {
                reject(new BussinessException('instituicao', err));
            });
        }));
    },

    atualizarInstituicaoRedes: function (id, redes) {
        return new Promise(((resolve, reject) => {
            instituicaoRepository.atualizarInstituicaoRedes(id, redes)
                .then(() => {
                    resolve();
                }).catch(err => {
                reject(new BussinessException('instituicao', err));
            });
        }));
    },

    ajustarInstituicao: function(instituicao, aberto){
        instituicao.dataValues.aberto = aberto;
        for (let hora of instituicao.horarios) {
            let horario = hora;
            horario.horaAbertura = horario.horaAbertura.slice(0, 5);
            horario.horaFechamento = horario.horaFechamento.slice(0, 5);
        }
        return instituicao;
    },

    atualizarInstituicaoImagens: function (id, imagens) {
        return new Promise(((resolve, reject) => {
            instituicaoRepository.atualizarInstituicaoImagens(id, imagens)
                .then(() => {
                    resolve();
                }).catch(err => {
                reject(new BussinessException('instituicao', err));
            });
        }));
    },
};