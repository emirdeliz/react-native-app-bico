import Constants from '../../constants';

export default class ProfessionalService {
    static findAll() {
        fetch(`${Constants.SERVER_REST}/professional`)
        .then((response) => console.log(response.json()))
        .done();
    }
}
