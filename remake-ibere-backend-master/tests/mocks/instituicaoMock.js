const instituicaoCompleta = {
    descricao: "Um museu teste",
    endereco: "Rua Teste 123",
    latitude: 98.0,
    longitude: -97.0,
    nome: "O Museu",
    observacoes: "Um museu",
    telefone: "(51)99999999",
    tempoVisita: 60,
    horarios: [
        {
            dia: "seg",
            horaAbertura: "13:00",
            horaFechamento: "22:00"
        },
        {
            dia: "ter",
            horaAbertura: "13:00",
            horaFechamento: "22:00"
        },
        {
            dia: "qua",
            horaAbertura: "13:00",
            horaFechamento: "22:00"
        }
    ],
    redes: [
        {
            redeSocial: "facebook.com/teste"
        }
    ],
    imagens: [
        {
            url: "www.google.com.br/imagem.png"
        }
    ]
};

const instituicaoRetornoLista = {
    id: 1,
    descricao: "Um museu teste",
    endereco: "Rua Teste 123",
    latitude: 98.0,
    longitude: -97.0,
    nome: "O Museu",
    observacoes: "Um museu",
    telefone: "(51)99999999",
    tempoVisita: 60,
    horarios: [
        {
            dia: "seg",
            horaAbertura: "13:00:00",
            horaFechamento: "22:00:00"
        },
        {
            dia: "ter",
            horaAbertura: "13:00:00",
            horaFechamento: "22:00:00"
        },
        {
            dia: "qua",
            horaAbertura: "13:00:00",
            horaFechamento: "22:00:00"
        }
    ],
    redes: [
        {
            redeSocial: "facebook.com/teste"
        }
    ],
    imagens: [
        {
            url: "www.google.com.br/imagem.png"
        }
    ]
};

const instituicaoRetorno = {
    dataValues: {
        id: 1,
        descricao: "Um museu teste",
        endereco: "Rua Teste 123",
        latitude: 98.0,
        longitude: -97.0,
        nome: "O Museu",
        observacoes: "Um museu",
        telefone: "(51)99999999",
        tempoVisita: 60
    },
    horarios: [
        {
            dia: "seg",
            horaAbertura: "13:00:00",
            horaFechamento: "22:00:00"
        },
        {
            dia: "ter",
            horaAbertura: "13:00:00",
            horaFechamento: "22:00:00"
        },
        {
            dia: "qua",
            horaAbertura: "13:00:00",
            horaFechamento: "22:00:00"
        }
    ],
    redes: [
        {
            redeSocial: "facebook.com/teste"
        }
    ],
    imagens: [
        {
            url: "www.google.com.br/imagem.png"
        }
    ]
};

const instituicaoRetornoService = {
    dataValues: {
        id: 1,
        descricao: "Um museu teste",
        endereco: "Rua Teste 123",
        latitude: 98.0,
        longitude: -97.0,
        nome: "O Museu",
        observacoes: "Um museu",
        telefone: "(51)99999999",
        tempoVisita: 60,
    aberto: true
    },
    horarios: [
        {
            dia: "seg",
            horaAbertura: "13:00",
            horaFechamento: "22:00"
        },
        {
            dia: "ter",
            horaAbertura: "13:00",
            horaFechamento: "22:00"
        },
        {
            dia: "qua",
            horaAbertura: "13:00",
            horaFechamento: "22:00"
        }
    ],
    redes: [
        {
            redeSocial: "facebook.com/teste"
        }
    ],
    imagens: [
        {
            url: "www.google.com.br/imagem.png"
        }
    ]
};

const instituicaoSumarizada = {
    id: 1,
    nome: "O Museu",
    endereco: "Rua Teste 123",
    latitude: 98.0,
    longitude: -97.0,
    aberto: true,
}

const instituicaoCompletaErroDiaSemana = {
    descricao: "Um museu teste",
    endereco: "Rua Teste 123",
    latitude: 98.0,
    longitude: -97.0,
    nome: "O Museu",
    observacoes: "Um museu",
    telefone: "(51)99999999",
    tempoVisita: 60,
    horarios: [
        {
            dia: "segunda",
            horaAbertura: "13:00",
            horaFechamento: "22:00"
        },
        {
            dia: "terca",
            horaAbertura: "13:00",
            horaFechamento: "22:00"
        },
        {
            dia: "quarta",
            horaAbertura: "13:00",
            horaFechamento: "22:00"
        }
    ],
    redes: [
        {
            redeSocial: "facebook.com/teste"
        }
    ],
    imagens: [
        {
            url: "www.google.com.br/imagem.png"
        }
    ]
};

const instituicaoCompletaErroTelefone = {
    descricao: "Um museu teste",
    endereco: "Rua Teste 123",
    latitude: 98.0,
    longitude: -97.0,
    nome: "O Museu",
    observacoes: "Um museu",
    telefone: "5199999999",
    tempoVisita: 60,
    horarios: [
        {
            dia: "seg",
            horaAbertura: "13:00",
            horaFechamento: "22:00"
        },
        {
            dia: "qua",
            horaAbertura: "13:00",
            horaFechamento: "22:00"
        },
        {
            dia: "sex",
            horaAbertura: "13:00",
            horaFechamento: "22:00"
        }
    ],
    redes: [
        {
            redeSocial: "facebook.com/teste"
        }
    ],
    imagens: [
        {
            url: "www.google.com.br/imagem.png"
        }
    ]
};

const instituicaoIncompleta = {
    descricao: "Um museu teste",
    endereco: "Rua Teste 123",
    latitude: 98.0,
    longitude: -97.0,
    nome: "O Museu",
    observacoes: "Um museu",
    telefone: "(51)99999999",
    tempoVisita: 60
};

const instituicaoNome = {
    nome: "O Museu"
};

const instituicaoHorarios = [
    {
        dia: "seg",
        horaAbertura: "13:00",
        horaFechamento: "22:00"
    },
    {
        dia: "ter",
        horaAbertura: "13:00",
        horaFechamento: "22:00"
    },
    {
        dia: "qua",
        horaAbertura: "13:00",
        horaFechamento: "22:00"
    }
];

const instituicaoRedes = [
    {
        redeSocial: "facebook.com/teste"
    }
];

const instituicaoImagens = [
    {
        url: "www.google.com.br/imagem.png"
    }
];

module.exports = {
    instituicaoCompleta, instituicaoRetorno, instituicaoSumarizada, instituicaoIncompleta, instituicaoNome, instituicaoHorarios, instituicaoRedes,
    instituicaoImagens, instituicaoCompletaErroDiaSemana, instituicaoCompletaErroTelefone, instituicaoRetornoService, instituicaoRetornoLista
};