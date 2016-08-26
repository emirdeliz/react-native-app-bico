
const typeWork1 = {
    id: 1,
    description: 'Jardineiro'
}

const typeWork2 = {
    id: 2,
    description: 'Pedreiro'
}

const typeWork3 = {
    id: 3,
    description: 'Borracheiro'
}

const rating1 = {
    notePrice: 3,
    noteService: 2,
    noteScore: 4,
    description:
        'Ultrices nulla lorem risus, feugiat condimentum augue nam senectus. Tincidunt felis libero ac mauris,' +
        'egestas nullam vestibulum rutrum id nulla, duis pede eleifend ac quam. Suspendisse volutpat nibh diam,' +
        'mauris lorem'
}

const rating2 = {
    notePrice: 4,
    noteService: 4,
    noteScore: 3,
    description:
        'Ultrices nulla lorem risus, feugiat condimentum augue nam senectus. Tincidunt felis libero ac mauris,' +
        'egestas nullam vestibulum rutrum id nulla, duis pede eleifend ac quam. Suspendisse volutpat nibh diam,' +
        'mauris lorem'
}

const rating3 = {
    notePrice: 5,
    noteService: 5,
    noteScore: 4,
    description:
        'Ultrices nulla lorem risus, feugiat condimentum augue nam senectus. Tincidunt felis libero ac mauris,' +
        'egestas nullam vestibulum rutrum id nulla, duis pede eleifend ac quam. Suspendisse volutpat nibh diam,' +
        'mauris lorem'
}

const rating4 = {
    notePrice: 5,
    noteService: 5,
    noteScore: 4,
    description:
        'Ultrices nulla lorem risus, feugiat condimentum augue nam senectus. Tincidunt felis libero ac mauris,' +
        'egestas nullam vestibulum rutrum id nulla, duis pede eleifend ac quam. Suspendisse volutpat nibh diam,' +
        'mauris lorem'
}

const rating5 = {
    notePrice: 3,
    noteService: 3,
    noteScore: 4,
    description:
        'Ultrices nulla lorem risus, feugiat condimentum augue nam senectus. Tincidunt felis libero ac mauris,' +
        'egestas nullam vestibulum rutrum id nulla, duis pede eleifend ac quam. Suspendisse volutpat nibh diam,' +
        'mauris lorem'
}

const image1 = {
    path: { uri: 'https://mamempreendimentos.files.wordpress.com/2015/09/casa.jpg' },
    description:
        'Primeiro Aqui é Body Builder Ipsum PORRA! Eita porra!, tá saindo da jaula o monstro!' +
        'Eu quero esse 13 daqui a pouquinho aí. Vamo monstro! Vo derrubar tudo essas árvore do parque ibirapuera.' +
        'Sai filho da puta! Negativa Bambam negativa.'

}

const image2 = {
    path: { uri: 'http://kingofwallpapers.com/casa/casa-001.jpg' },
    description:
        'Segundo Ele tá olhando pra gente. AHHHHHHHHHHHHHHHHHHHHHH..., porra!' +
        'Ó o homem ali porra!, é 13 porra! Boraaa, Hora do Show Porra. É 13 porra!' +
        'Eu quero esse 13 daqui a pouquinho aí.'
}

const image3 = {
    path: { uri: 'http://www.donagiraffa.com/wp-content/uploads/2012/12/Fachada-de-casa-06.jpg' },
    description:
        'Sabe o que é isso daí? Trapézio descendente é o nome disso aí.' +
        'Não vai dá não. É 13 porra! Vo derrubar tudo essas árvore do parque ibirapuera.' +
        'Ele tá olhando pra gente. Aqui é bodybuilder porra!'
}

const image4 = {
    path: { uri: 'http://luizcesarimoveis.com.br/wp-content/uploads/2016/04/Casa61m2.jpg' },
    description:
        'Vamo monstro! É esse que a gente quer, é ele que nóis vamo buscar. Ele tá olhando pra gente.' +
        'É 37 anos caralho! Aqui nóis SearchMock.rói fibra, não é água com músculo. É verão o ano todo vem cumpadi.'
}

const image5 = {
    path: { uri: 'http://cdn1.valuegaia.com.br/watermark/agencies_networks/3589_67/properties/522721865_3589FC2EEB40616FADDD55BF047CC68773888A7410C396063.jpg' },
    description:
        'Vamo monstro! Eu quero esse 13 daqui a pouquinho aí. Ele tá olhando pra gente.' +
        'É verão o ano todo vem cumpadi. Birl! Ajuda o maluco que tá doente.'
}

const image6 = {
    path: { uri: 'https://pixabay.com/const/uploads/photo/2012/03/01/16/06/bungalow-20544_960_720.jpg' },
    description:
        'Birl! Sabe o que é isso daí? Trapézio descendente é o nome disso aí.' +
        'Ó o homem ali porra!, é 13 porra! Vai subir árvore é o caralho porra!' +
        'Aqui nóis SearchMock.rói fibra, não é água com músculo.' +
        'Eu quero esse 13 daqui a pouquinho aí.'
}

const image7 = {
    path: { uri: 'http://www.grzebiela.de/Images/Bungalows/Typ%20Techentin/Techentin02.jpg' },
    description:
        'Que não vai dá rapaiz, não vai dá essa porra. Boraaa, Hora do Show Porra.' +
        'Eu quero esse 13 daqui a pouquinho aí. Eita porra!, tá saindo da jaula o monstro!' +
        'Ele tá olhando pra gente. Vai subir árvore é o caralho porra!'
}

const image8 = {
    path: { uri: 'https://casaacasa.files.wordpress.com/2011/03/casa-de-madeira-3.jpg' },
    description:
        'Não vai dá não. Bora caralho, você quer ver essa porra velho. AHHHHHHHHHHHHHHHHHHHHHH..., porra!' +
        'Aqui nóis SearchMock.rói fibra, não é água com músculo.' +
        'Negativa Bambam negativa. Ó o homem ali porra!, é 13 porra!'
}

/*  Professional */
const work1 = {
    dateExecution: new Date(2016, 5, 30, 15, 30, 0, 0),
    rating: rating5,
    typeWork: typeWork1,
    description:
        'Tincidunt fermentum, sit dolor.' +
        'Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.' +
        'Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,' +
        'at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum',
    images: [image1, image2, image3, image4, image5, image6, image7, image8]
}

const work2 = {
    dateExecution: new Date(2016, 6, 25, 9, 55, 0, 0),
    rating: rating3,
    typeWork: typeWork2,
    description:
        'Tincidunt fermentum, sit dolor.' +
        'Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.' +
        'Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,' +
        'at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum',
    images: [image1, image2, image3, image4, image5, image6, image7, image8]
}

const work3 = {
    dateExecution: new Date(2016, 4, 28, 10, 30, 0, 0),
    rating: rating1,
    typeWork: typeWork1,
    description:
        'Tincidunt fermentum, sit dolor.' +
        'Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.' +
        'Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,' +
        'at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum',
    images: [image1, image2, image3, image4, image5, image6, image7, image8]
}

const work4 = {
    dateExecution: new Date(2016, 5, 26, 14, 45, 0, 0),
    rating: rating2,
    typeWork: typeWork1,
    description:
        'Tincidunt fermentum, sit dolor.' +
        'Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.' +
        'Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,' +
        'at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum',
    images: [image1, image2, image3, image4, image5, image6, image7, image8]
}

const work5 = {
    dateExecution: new Date(2016, 7, 20, 11, 35, 0, 0),
    rating: rating4,
    typeWork: typeWork3,
    description:
        'Tincidunt fermentum, sit dolor.' +
        'Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.' +
        'Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius' +
        'at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum',
    images: [image1, image2, image3, image4, image5, image6, image7, image8]
}

const professional1 = {
    name: 'Pedro Carlos',
    adress: 'Tincidunt fermentum, sit dolor',
    picture: 'http://whitenessproject.org/img/09-rob.jpg',
    note: 'This is item # 1',
    typeWork: [typeWork1, typeWork3],
    work: [work1, work2, work3],
    noteAveragePrice: 4,
    noteAverageService: 3.3,
    noteAverageScore: 1.5,
    distance: 456,
    description:
        'Tincidunt fermentum, sit dolor. Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.' +
        'Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,' +
        'at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum'
}

const professional2 = {
    name: 'Carlos Almeida',
    adress: 'Tincidunt fermentum, sit dolor',
    picture: 'http://whitenessproject.org/img/08-jason.jpg',
    note: 'This is item # 2',
    typeWork: [typeWork2, typeWork3],
    work: [work3, work4, work5],
    noteAveragePrice: 5,
    noteAverageService: 4.5,
    noteAverageScore: 5,
    distance: 876,
    description:
        'Tincidunt fermentum, sit dolor. Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.' +
        'Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,' +
        'at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum'
}

const professional3 = {
    name: 'Jael Cruel',
    adress: 'Tincidunt fermentum, sit dolor',
    picture: 'https://pbs.twimg.com/profile_images/741736645091688448/bnGuX7XR_400x400.jpg',
    note: 'This is item # 3',
    typeWork: [typeWork1, typeWork2],
    work: [work2, work1, work3],
    noteAveragePrice: 3,
    noteAverageService: 3.4,
    noteAverageScore: 5,
    distance: 123,
    description:
        'Tincidunt fermentum, sit dolor. Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.' +
        'Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,' +
        'at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum'
}

const professional4 = {
    name: 'Ivo Almeida',
    adress: 'Tincidunt fermentum, sit dolor',
    picture: 'http://cdn2.thr.com/sites/default/files/imagecache/scale_crop_768_433/2015/02/AP744829400147.jpg',
    note: 'This is item # 4',
    typeWork: [typeWork3],
    work: [work1],
    noteAveragePrice: 3,
    noteAverageService: 3,
    noteAverageScore: 2.3,
    distance: 899,
    description:
        'Tincidunt fermentum, sit dolor. Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.' +
        'Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,' +
        'at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum'
}

const professional5 = {
    name: 'José Nascimento',
    adress: 'Tincidunt fermentum, sit dolor',
    picture: 'https://coursehero.s3.amazonaws.com/file_upload/profile_pics/337b83194e8745b09709b13984378e3d0b072ef1.jpg',
    note: 'This is item # 5',
    typeWork: [typeWork1],
    work: [work1, work2],
    noteAveragePrice: 4.5,
    noteAverageService: 3,
    noteAverageScore: 5,
    distance: 456,
    description:
        'Tincidunt fermentum, sit dolor. Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.' +
        'Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,' +
        'at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum'
}

const data = [
    professional1,
    professional2,
    professional3,
    professional4,
    professional5,
    professional1,
    professional2,
    professional3,
    professional4,
    professional5
]

export { data }
