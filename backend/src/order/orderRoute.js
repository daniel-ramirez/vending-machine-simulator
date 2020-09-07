const express = require("express");
const controllers = require("./orderController");

const router = express.Router();

const getOrders = controllers.getOrders;
const getOrder = controllers.getOrder;
const addOrder = controllers.addOrder;
const updateOrder = controllers.updateOrder;
const removeOrder = controllers.removeOrder;
const deliveryOrder = controllers.deliveryOrder;

router.route("/").post(addOrder).get(getOrders);
router.route("/:id").get(getOrder).patch(updateOrder).delete(removeOrder);
router.route("/:id/delivery").get(deliveryOrder);

module.exports = router;
