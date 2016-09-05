import { image1, image2, image3, image4, image5, image6, image7, image8 } from '../image'
import { typeJob1, typeJob2, typeJob3 } from '../type-job'
import { rating1, rating2, rating3, rating4, rating5 } from '../rating'
import { client1, client2, client3, client4, client5, client6, client7, client8, client9, client10 } from '../client'

const professional1 = {
    name: 'Ragnar Lodbrok',
    adress: 'Tincidunt fermentum, sit dolor',
    picture: 'https://s-media-cache-ak0.pinimg.com/736x/35/c8/2c/35c82c9beb22560f2abdbec089a7d945.jpg',
    note: 'This is item # 1',
    typeJob: [typeJob1, typeJob3],
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
    name: 'Lagertha',
    adress: 'Tincidunt fermentum, sit dolor',
    picture: 'https://s-media-cache-ak0.pinimg.com/236x/a5/e3/44/a5e344bffed13bb6d6bb6890fa58c9ed.jpg',
    note: 'This is item # 2',
    typeJob: [typeJob2, typeJob3],
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
    name: 'Floki',
    adress: 'Tincidunt fermentum, sit dolor',
    picture: 'https://s-media-cache-ak0.pinimg.com/564x/df/92/e0/df92e000528887eb765c0ea1c5fabf5e.jpg',
    note: 'This is item # 3',
    typeJob: [typeJob1, typeJob2],
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
    name: 'Björn Lodbrok',
    adress: 'Tincidunt fermentum, sit dolor',
    picture: 'https://tribzap2it.files.wordpress.com/2015/02/alexander-ludwig-vikings-history.jpg?w=900&h=400',
    note: 'This is item # 4',
    typeJob: [typeJob3],
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
    name: 'Rolo',
    adress: 'Tincidunt fermentum, sit dolor',
    picture: 'http://ciborguesedinossauros.com.br/wp-content/uploads/2015/04/rollo.jpg',
    note: 'This is item # 5',
    typeJob: [typeJob1],
    noteAveragePrice: 4.5,
    noteAverageService: 3,
    noteAverageScore: 5,
    distance: 456,
    description:
        'Tincidunt fermentum, sit dolor. Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.' +
        'Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,' +
        'at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum'
}

const job1 = {
    dateExecution: new Date(2016, 5, 30, 15, 30, 0, 0),
    rating: rating5,
    typeJob: typeJob1,
    description:
        'Tincidunt fermentum, sit dolor.' +
        'Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.' +
        'Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,' +
        'at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum',
    images: [image1, image2, image3, image4, image5, image6, image7, image8],
    professional: professional1,
    client: client1
}

const job2 = {
    dateExecution: new Date(2016, 12, 25, 9, 55, 0, 0),
    rating: rating3,
    typeJob: typeJob2,
    description:
        'Tincidunt fermentum, sit dolor.' +
        'Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.' +
        'Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,' +
        'at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum',
    images: [image1, image2, image3, image4, image5, image6, image7, image8],
    professional: professional2,
    client: client2
}

const job3 = {
    dateExecution: new Date(2016, 4, 28, 10, 30, 0, 0),
    rating: rating1,
    typeJob: typeJob1,
    description:
        'Tincidunt fermentum, sit dolor.' +
        'Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.' +
        'Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,' +
        'at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum',
    images: [image1, image2, image3, image4, image5, image6, image7, image8],
    professional: professional3,
    client: client3
}

const job4 = {
    dateExecution: new Date(2016, 11, 26, 14, 45, 0, 0),
    rating: rating2,
    typeJob: typeJob1,
    description:
        'Tincidunt fermentum, sit dolor.' +
        'Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.' +
        'Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,' +
        'at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum',
    images: [image1, image2, image3, image4, image5, image6, image7, image8],
    professional: professional4,
    client: client4
}

const job5 = {
    dateExecution: new Date(2016, 12, 20, 11, 35, 0, 0),
    rating: rating4,
    typeJob: typeJob3,
    description:
        'Tincidunt fermentum, sit dolor.' +
        'Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.' +
        'Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius' +
        'at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum',
    images: [image1, image2, image3, image4, image5, image6, image7, image8],
    professional: professional5,
    client: client5
}

const data = [
    job1,
    job2,
    job3,
    job4,
    job5
]

export { data, job1, job2, job3, job4, job5 }
