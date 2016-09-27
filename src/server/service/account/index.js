import { Account } from '../../database';
import { mergeObjects } from '../../../imports/utils';

export default class AccountService {
    find() {
        return new Promise((resolve, reject) => {
            Account.find((err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }

    persist(object) {
        return new Promise((resolve, reject) => {
            let account = new Account();
            account = mergeObjects(account, object);

            account.save((err) => {
                if (err) reject(err);
                resolve({ message: 'Account created!' });
            });
        });
    }
}
