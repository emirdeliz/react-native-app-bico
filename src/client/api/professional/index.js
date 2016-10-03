import Constants from '../../constants';

const url = `${Constants.SERVER_REST}/professional`;

const findAll = () => {
    return fetch(url).then((response) => {
        return response.json().then((json) => {
            return json;
        });
    });
};

const persist = () => {
    return fetch(url).then((response) => {
        return response.json().then((json) => {
            return json;
        });
    });
};

export { findAll, persist };
