const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/item.json");


function readData() {
    const data = fs.readFileSync(dataPath, "utf8");
    return JSON.parse(data);
  }
  
  function writeData(data) {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  }

exports.getItems = (req, res) => { 
  const items = readData();
  res.json(items);};

exports.getItemById = (req, res) => { 
    const items = readData();
    const item = items.find(i => i.id == req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(item);};

exports.createItem = (req, res) => { 
    const items = readData();
    const newItem = {
      id: Date.now(),
      ...req.body
    };
    items.push(newItem);
    writeData(items);
    res.status(201).json(newItem); };

exports.updateItem = (req, res) => {  const items = readData();
    const index = items.findIndex(i => i.id == req.params.id);
    if (index === -1) {
      return res.status(404).json({ message: "Item not found" });
    }
    items[index] = { ...items[index], ...req.body };
    writeData(items);
    res.json(items[index]); };

exports.deleteItem = (req, res) => {  const items = readData();
  const index = items.findIndex(i => i.id == req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: "Item not found" });
  }
  items.splice(index, 1);
  writeData(items);
  res.json({ message: "Item deleted" }); };
