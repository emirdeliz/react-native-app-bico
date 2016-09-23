import ProfessionalService from '../service/professional';
import { data as professionalMock } from '../../imports/mock/professional';

const professional = () => {
    const promises = [];
    const professionalService = new ProfessionalService();

    return new Promise((resolve, reject) => {
        professionalService.removeAll().then(() => {
            console.log('Remoção concluída...');
            professionalMock.forEach((item, i) => {
                console.log(`Persistindo: ${i}`);
                promises.push(professionalService.persist(item));
            });

            Promise.all(promises).then(() => {
                console.log('Persistência concluída...');
                professionalService.findAll().then(
                    (result) => resolve(result),
                    (err) => reject(err)
                );
            });
        });
    });
};

export default professional;
