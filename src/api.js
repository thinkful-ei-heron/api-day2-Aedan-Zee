const BASE_URL = 'https://thinkful-list-api.herokuapp.com/lazandrea';

const getItems = function() {
  return fetch(`${BASE_URL}/items`);
};

const createItem = function(name) {
  let newItem = JSON.stringify({
    name
  });

  return fetch(`${BASE_URL}/items`, {
    'method': 'post',
    'headers':  {
        'Content-Type': 'application/json'
      },
    'body' : newItem
  });
};

export default {
  getItems,
  createItem
};
