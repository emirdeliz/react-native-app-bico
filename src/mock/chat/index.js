import * as ProfessionalMock from '../professional'

const message1 = {
    _id: 1,
    user: {
        _id: 1,
        name: ProfessionalMock.data[0].name,
        avatar: ProfessionalMock.data[0].picture
    },
    text: 'Aqui é Body renderer Ipsum PORRA! Que não vai dá rapaiz, não vai dá essa porra. Não vai dá não.' +
        'Sabe o que é isso daí? Trapézio descendente é o nome disso aí. Eita porra!, tá saindo da jaula o monstro!' +
        'Bora caralho, você quer ver essa porra velho. Vo derrubar tudo essas árvore do parque ibirapuera.',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0))
}

const message2 = {
    _id: 91,
    user: {
        _id: 1,
        name: ProfessionalMock.data[0].name,
        avatar: ProfessionalMock.data[0].picture
    },
    image: 'http://kingofwallpapers.com/home/home-001.jpg',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0))
}

const message3 = {
    _id: 92,
    user: {
        _id: 1,
        name: ProfessionalMock.data[0].name,
        avatar: ProfessionalMock.data[0].picture
    },
    image: 'http://ww1.prweb.com/prfiles/2013/04/05/11100911/lennar%20exterior-1%20small.jpg',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0))
}

const message4 = {
    _id: 2,
    user: {
        _id: 2,
        name: ProfessionalMock.data[1].name,
        avatar: ProfessionalMock.data[1].picture,
    },
    text: 'Eu quero esse 13',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0))
}

const message5 = {
    _id: 3,
    user: {
        _id: 2,
        name: ProfessionalMock.data[1].name,
        avatar: ProfessionalMock.data[1].picture,
    },
    text: 'É verão o ano ano ano',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0))
}

const message6 = {
    _id: 4,
    user: {
        _id: 1,
        name: ProfessionalMock.data[1].name,
        avatar: ProfessionalMock.data[0].picture
    },
    text: ' Que não vai dá rapaiz, não vai dá essa porra.' +
    'Tá comigo porra. Bora caralho, você quer ver essa porra velho.',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0))
}

const message7 = {
    _id: 5,
    user: {
        _id: 2,
        name: ProfessionalMock.data[1].name,
        avatar: ProfessionalMock.data[1].picture,
    },
    text: 'Bora caralho, você quer ver essa porra velho.',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0))
}

const data = [
    message1,
    message2,
    message3,
    message4,
    message5,
    message6,
    message7
]

export { data }
