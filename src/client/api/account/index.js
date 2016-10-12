import Constants from '../../constants';

const url = `${Constants.SERVER_REST}/account`;

const find = () => {
    return fetch(url).then((response) => {
        return response.json().then((json) => {
            return json.result;
        });
    });
};

const persist = (object) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(object),
        headers: new Headers({
		    'Content-Type': 'application/json'
        })
    }).then((response) => {
        return response.json().then((json) => {
            return json;
        });
    });
};

export { find, persist };
