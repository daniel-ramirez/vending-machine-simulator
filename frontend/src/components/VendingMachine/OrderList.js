import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import {
  updateNotificationReference,
  fetchOrders,
  deliverOrder
} from "../../actions/OrderActions";
import OrderItem from "./OrderItem";

class OrderList extends Component {
  notificationMessages = null;
  componentDidMount() {
    const { updateNotificationReference, fetchOrders } = this.props;
    updateNotificationReference({ reference: this.notificationMessages });
    fetchOrders();
  }

  render() {
    const { vendingMachineOrders, deliverOrder } = this.props;
    // Return main content
    return (
      <Fragment>
        <div
          style={{
            height: "350px",
            border: "1px solid lightgray",
            overflow: "auto"
          }}
        >
          {vendingMachineOrders.map(order => (
            <OrderItem
              key={order._id}
              order={order}
              onCounterZero={deliverOrder}
            />
          ))}
        </div>

        <ToastProvider
          placement="bottom-right"
          ref={el => (this.notificationMessages = el)}
        />
      </Fragment>
    );
  }
}

OrderList.propTypes = {};

const mapStateToProps = state => ({
  isLoading: state.ui.isLoading,
  vendingMachineOrders: state.vendingMachineOrder.vendingMachineOrders
});

export default connect(mapStateToProps, {
  updateNotificationReference,
  fetchOrders,
  deliverOrder
})(OrderList);
