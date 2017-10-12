import Constants from '../../constants';

const urlBase = `${Constants.SERVER_REST}/account`;

const find = () => {
  return fetch(urlBase).then(
    (response) => {
      return response.json().then((json) => {
        return json.result;
      });
    },
    (err) => {
      console.log(err);
    },
  );
};

const persist = (object) => {
  return fetch(urlBase, {
    method: 'POST',
    body: JSON.stringify(object),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    return response.json().then((json) => {
      return json.result;
    });
  });
};

const populate = () => {
  return fetch(`${urlBase}/populate`).then(
    (response) => {
      return response.json().then((json) => {
        return json.result;
      });
    },
    (err) => {
      console.log(err);
    },
  );
};

export { find, persist, populate };
