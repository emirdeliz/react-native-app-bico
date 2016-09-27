import Constants from '../../constants';

const findAll = () => {
    return fetch(`${Constants.SERVER_REST}/account`).then((response) => {
        return response.json().then((json) => {
            return json.result;
        })
    })
};

export { findAll }
