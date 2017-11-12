/* eslint no-undef: 0 */

import { Professional } from '../../database';
import mergeObjects from '../../../imports/utils';

export default class ProfessionalService {
  findById(id) {
    return new Promise((resolve, reject) => {
      Professional.find({ _id: ObjectId(id) }, (err, object) => {
        if (err) reject(err);
        resolve(object);
      });
    });
  }

  findAll() {
    return new Promise((resolve, reject) => {
      Professional.find((err, result) => {
        if (err) reject(err);
        resolve(result);
      }).catch(err => reject(err));
    });
  }

  persist(object) {
    return new Promise((resolve, reject) => {
      let professional = new Professional();
      professional = mergeObjects(professional, object);

      professional.save((err) => {
        if (err) reject(err);
        resolve({ message: 'Professional created!' });
      });
    });
  }

  remove(id) {
    return new Promise((resolve, reject) => {
      Professional.remove({ _id: id }, (err) => {
        if (err) reject(err);
        resolve({ message: 'Successfully deleted' });
      });
    });
  }

  removeAll() {
    return new Promise((resolve, reject) => {
      Professional.remove({}, (err) => {
        if (err) reject(err);
        resolve({ message: 'Successfully all deleted' });
      });
    });
  }
}
