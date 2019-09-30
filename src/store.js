const items = [];
let hideCheckeditems = false;
let error = null;

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (newItem) {
  this.items.push(newItem);
};

const findAndUpdate = function (id, newData) {
  let findId = this.findById(id);
  Object.assign(findId, newData);
};

const findAndDelete = function (id) {
  console.log(id);
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

const resetError = function () {
  this.error = null;
}

export default {
  items,
  hideCheckeditems,
  findById,
  addItem,
  findAndDelete,
  toggleCheckedFilter,
  findAndUpdate,
  error,
  resetError
};