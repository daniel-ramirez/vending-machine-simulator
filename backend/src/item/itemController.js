const Item = require("./itemModel");

const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.json({ message: error });
  }
};

const getItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.json(item);
  } catch (error) {
    res.json({ message: error });
  }
};

const addItem = async (req, res) => {
  const item = new Item(req.body);
  try {
    const savedItem = await item.save();
    res.json(savedItem);
  } catch (error) {
    res.json({ message: error });
  }
};

const updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.json(updatedItem);
  } catch (error) {
    res.json({ message: error });
  }
};

const removeItem = async (req, res) => {
  try {
    const removedItem = await Item.remove({ _id: req.params.id });
    res.json(removedItem);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports.getItems = getItems;
module.exports.getItem = getItem;
module.exports.addItem = addItem;
module.exports.updateItem = updateItem;
module.exports.removeItem = removeItem;
