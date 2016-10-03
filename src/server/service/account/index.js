import { Account } from '../../database';
import mergeObjects from '../../../imports/utils';

export default class AccountService {
    find() {
        return new Promise((resolve, reject) => {
            Account.find((err, result) => {
                if (err) reject(err);
                resolve((result && result.length > 0)? result[0]: {});
            });
        });
    }

    persist(object) {
        return new Promise((resolve, reject) => {
            let account = new Account();
            account = mergeObjects(account, object);

            account.save((err) => {
                if (err) reject(err);
                resolve(account);
            });
        });
    }

    removeAll() {
        return new Promise((resolve, reject) => {
            Account.remove({}, (err) => {
                if (err) reject(err);
                resolve({ message: 'Successfully all deleted' });
            });
        });
    }
}
