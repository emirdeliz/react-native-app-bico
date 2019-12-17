import { image1, image2, image3, image4, image5, image6, image7, image8 } from '../image';
import { typeJob1, typeJob2, typeJob3 } from '../type-job';
import { rating1, rating2, rating3, rating4, rating5 } from '../rating';
import { client1, client2, client3, client4, client5 } from '../client';

const professional1 = {
  name: 'Ragnar Lodbrok',
  adress: 'Tincidunt fermentum, sit dolor',
  picture:
    'https://www.biography.com/.image/ar_8:10%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTQxNDAyNjQ0MzAzMzI1MDc0/roald_dahl_getty_images_tony_evansgetty_images_108874289_croppedjpg.jpg',
  note: 'This is item # 1',
  typeJob: [typeJob1, typeJob3],
  noteAveragePrice: 4,
  noteAverageService: 3.3,
  noteAverageScore: 1.5,
  distance: 456,
  description:
    'Tincidunt fermentum, sit dolor. Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.' +
    'Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,' +
    'at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum',
};

const professional2 = {
  name: 'Lagertha',
  adress: 'Tincidunt fermentum, sit dolor',
  picture:
    'https://www.jadelogistics.com/wp-content/uploads/2018/04/person-kaustubh-dalvi-full.jpg',
  note: 'This is item # 2',
  typeJob: [typeJob2, typeJob3],
  noteAveragePrice: 5,
  noteAverageService: 4.5,
  noteAverageScore: 5,
  distance: 876,
  description:
    'Tincidunt fermentum, sit dolor. Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.' +
    'Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,' +
    'at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum',
};

const professional3 = {
  name: 'Floki',
  adress: 'Tincidunt fermentum, sit dolor',
  picture:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Tadashi_Yanai.jpg/220px-Tadashi_Yanai.jpg',
  note: 'This is item # 3',
  typeJob: [typeJob1, typeJob2],
  noteAveragePrice: 3,
  noteAverageService: 3.4,
  noteAverageScore: 5,
  distance: 123,
  description:
    'Tincidunt fermentum, sit dolor. Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.' +
    'Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,' +
    'at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum',
};

const professional4 = {
  name: 'Björn Lodbrok',
  adress: 'Tincidunt fermentum, sit dolor',
  picture:
    'https://www.biography.com/.image/ar_8:10%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTUwOTc3MzM5NDY1OTMzOTE3/jeff_flake_photo_for_the_washington_post_laura_segall_getty_images_545484698_500x500.jpg',
  note: 'This is item # 4',
  typeJob: [typeJob3],
  noteAveragePrice: 3,
  noteAverageService: 3,
  noteAverageScore: 2.3,
  distance: 899,
  description:
    'Tincidunt fermentum, sit dolor. Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.' +
    'Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,' +
    'at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum',
};

const professional5 = {
  name: 'Rolo',
  adress: 'Tincidunt fermentum, sit dolor',
  picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Emmanuel_Macron_in_2019.jpg/220px-Emmanuel_Macron_in_2019.jpg',
  note: 'This is item # 5',
  typeJob: [typeJob1],
  noteAveragePrice: 4.5,
  noteAverageService: 3,
  noteAverageScore: 5,
  distance: 456,
  description:
    'Tincidunt fermentum, sit dolor. Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.' +
    'Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,' +
    'at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum',
};

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
  client: client1,
};

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
  client: client2,
};

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
  client: client3,
};

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
  client: client4,
};

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
  client: client5,
};

const data = [job1, job2, job3, job4, job5];

export { data, job1, job2, job3, job4, job5 };
