import Constants from '../../constants';

const url = `${Constants.SERVER_REST}/professional`;

const findAll = () => {
  return fetch(url).then((response) => {
    return response.json().then((json) => {
      return json.result;
    });
  });
};

const persist = () => {
  return fetch(url).then((response) => {
    return response.json().then((json) => {
      return json.result;
    });
  });
};

export { findAll, persist };
