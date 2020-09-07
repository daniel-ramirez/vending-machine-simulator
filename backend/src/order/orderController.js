const Order = require("./orderModel");
const Sequence = require("./sequenceModel");

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.json({ message: error });
  }
};

const getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    res.json(order);
  } catch (error) {
    res.json({ message: error });
  }
};

const addOrder = async (req, res) => {
  console.log("get into addOrder");

  const body = {
    ...req.body,
    order_number: await getNextSequence("order_number")
  };

  const order = new Order(body);

  try {
    const savedOrder = await order.save();
    res.json(savedOrder);
  } catch (error) {
    res.json({ message: error });
  }
};

const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.json(updatedOrder);
  } catch (error) {
    res.json({ message: error });
  }
};

const removeOrder = async (req, res) => {
  try {
    const removedOrder = await Order.remove({ _id: req.params.id });
    res.json(removedOrder);
  } catch (error) {
    res.json({ message: error });
  }
};

const deliveryOrder = async (req, res) => {
  console.log("get into deliveryOrder");
  try {
    const order = await Order.findById(req.params.id);
    console.log(Date.now() + " Order: " + order.order_number);

    console.log(Date.now() + " Order delivered");
    const updatedOrder = await Order.updateOne(
      { _id: req.params.id },
      {
        $set: {
          status: "D",
          delivery_date: Date.now()
        }
      }
    );
    res.json(updatedOrder);
  } catch (error) {
    res.json({ message: error });
  }
};

const getNextSequence = async name => {
  var ret = await Sequence.findOneAndUpdate(
    { _id: name },
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  );

  return ret.seq;
};

const sleep = waitTimeInMs =>
  new Promise(resolve => setTimeout(resolve, waitTimeInMs * 1000));

module.exports.getOrders = getOrders;
module.exports.getOrder = getOrder;
module.exports.addOrder = addOrder;
module.exports.updateOrder = updateOrder;
module.exports.removeOrder = removeOrder;
module.exports.deliveryOrder = deliveryOrder;
