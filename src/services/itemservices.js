const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/items.json");

function readData() {
  const data = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(data);
}

function writeData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

exports.getAll = () => {
  return readData();
};

exports.getById = (id) => {
  const items = readData();
  return items.find(item => item.id == id);
};

exports.create = (newItem) => {
  const items = readData();
  newItem.id = Date.now();
  items.push(newItem);
  writeData(items);
  return newItem;
};

exports.update = (id, updatedData) => {
  const items = readData();
  const index = items.findIndex(item => item.id == id);
  if (index === -1) return null;

  items[index] = { ...items[index], ...updatedData };
  writeData(items);
  return items[index];
};

exports.remove = (id) => {
  const items = readData();
  const index = items.findIndex(item => item.id == id);
  if (index === -1) return false;

  items.splice(index, 1);
  writeData(items);
  return true;
};
