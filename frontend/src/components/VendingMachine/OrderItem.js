import React, { Fragment } from "react";

let OrderItem = props => {
  const { order, onCounterZero } = props;

  // Countdown
  const [counter, setCounter] = React.useState(order.total_processing_time);
  React.useEffect(() => {
    if (counter === 0 && order.status === "A") {
      onCounterZero(order._id);
    }

    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

    return () => clearInterval(timer);
  }, [counter, order, onCounterZero]);
  console.log(counter);

  var deliveryInfo =
    order.status === "A"
      ? ` (Remaining preparation time: ${counter}s)`
      : " Delivered";

  // Return main content
  return (
    <Fragment>
      <div
        style={{
          margin: "5px",
          padding: "10px",
          border: "1px solid lightgray"
        }}
      >
        <span>
          <small>
            <b>Order # {order.order_number}</b>: $ {order.total_amount} -
            {deliveryInfo}
          </small>
        </span>
      </div>
    </Fragment>
  );
};

export default OrderItem;
