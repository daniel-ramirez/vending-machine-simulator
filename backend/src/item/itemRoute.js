const express = require("express");
const controllers = require("./itemController");

const router = express.Router();

const getItems = controllers.getItems;
const getItem = controllers.getItem;
const addItem = controllers.addItem;
const updateItem = controllers.updateItem;
const removeItem = controllers.removeItem;

router.route("/").post(addItem).get(getItems);
router.route("/:id").get(getItem).patch(updateItem).delete(removeItem);

module.exports = router;
