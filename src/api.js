const BASE_URL = 'https://thinkful-list-api.herokuapp.com/lazandrea';

const getItems = function () {
  return fetch(`${BASE_URL}/items`);
};

const createItem = function (name) {
  let newItem = JSON.stringify({
    name
  });

  return fetch(`${BASE_URL}/items`, {
    'method': 'post',
    'headers': {
      'Content-Type': 'application/json'
    },
    'body': newItem
  });
};

const updateItem = function (id, updateData) {
  let bodyInfo = JSON.stringify(updateData);
  console.log(bodyInfo);
  return fetch(`${BASE_URL}/items/${id}`, {
    'method': 'PATCH',
    'header': {
      'Content-Type': 'application/json'
    },
    'body': 'bodyInfo'
  });
};

export default {
  getItems,
  createItem,
  updateItem
};
