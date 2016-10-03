import { Account } from '../../database';
import mergeObjects from '../../../imports/utils';

export default class AccountService {
    find() {
        return new Promise((resolve, reject) => {
            Account.findOne((err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }

    persist(object) {
        return new Promise((resolve, reject) => {
            const id = object._id;
            const isUpdate = (id);

            if(isUpdate) {
                Account.findOne({'_id': id}, (err, objectDb) => {
                    let account = mergeObjects(objectDb, object);
                    account.save((err) => {
                        if (err) reject(err);
                            resolve(account);
                    });
                });
            } else {
                let account = new Account();
                account = mergeObjects(account, object);
                account.save((err) => {
                    if (err) reject(err);
                        resolve(account);
                });
            }
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
