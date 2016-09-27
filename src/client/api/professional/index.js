import Constants from '../../constants';

const findAll = () => {
    return fetch(`${Constants.SERVER_REST}/professional`).then((response) => {
        return response.json().then((json) => {
            return json.result;
        });
    });
};

const persist = () => {
    return fetch(`${Constants.SERVER_REST}/professional`).then((response) => {
        return response.json().then((json) => {
            return json.result;
        });
    });
};

export { findAll, persist };
