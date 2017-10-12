import { AccountService, ProfessionalService } from '../service';
import { account as accountMock } from '../../imports/mock/account';
import { data as professionalMock } from '../../imports/mock/professional';

const accountPopulate = () => {
  const accountService = new AccountService();

  return new Promise((resolve, reject) => {
    accountService.removeAll().then(
      () => {
        console.log('Remoção concluída...');

        accountService.persist(accountMock).then(() => {
          console.log('Persistência concluída...');
          accountService.find().then(result => resolve(result), err => reject(err));
        });
      },
      (err) => {
        console.log(`Error ${err}`);
        reject(err);
      },
    );
  });
};

const professionalPopulate = () => {
  const promises = [];
  const professionalService = new ProfessionalService();

  return new Promise((resolve, reject) => {
    professionalService.removeAll().then(
      () => {
        console.log('Remoção concluída...');

        professionalMock.slice(0, 10).forEach((item, i) => {
          console.log(`Persistindo: ${i}`);
          promises.push(professionalService.persist(item));
        });

        Promise.all(promises).then(() => {
          console.log('Persistência concluída...');
          professionalService.findAll().then(result => resolve(result), err => reject(err));
        });
      },
      (err) => {
        console.log(`Error ${err}`);
        reject(err);
      },
    );
  });
};

export { accountPopulate, professionalPopulate };
