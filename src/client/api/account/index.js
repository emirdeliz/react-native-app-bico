import Constants from '../../constants';

const find = () => {
    return fetch(`${Constants.SERVER_REST}/account`).then((response) => {
        return response.json().then((json) => {
            return json.result;
        });
    });
};

const persist = () => {
    return fetch(`${Constants.SERVER_REST}/account`).then((response) => {
        return response.json().then((json) => {
            return json.result;
        });
    });
};

export { find, persist };
