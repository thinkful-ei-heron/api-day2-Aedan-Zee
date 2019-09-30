import $ from 'jquery';
import api from './api';
import 'normalize.css';
import './index.css';

import shoppingList from './shopping-list';
import store from './store';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
