import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import {
  updateNotificationReference,
  addNewOrder
} from "../../actions/OrderActions";
import OrderList from "./OrderList";

class OrderInfo extends Component {
  notificationMessages = null;
  componentDidMount() {
    const { updateNotificationReference } = this.props;
    updateNotificationReference({ reference: this.notificationMessages });
  }

  handleNewOrder = () => {
    const { vendingMachineNewOrder, addNewOrder } = this.props;
    addNewOrder(vendingMachineNewOrder);
  };

  render() {
    const { vendingMachineNewOrder } = this.props;
    // Return main content
    return (
      <Fragment>
        <div style={{ textAlign: "center", border: "1px solid lightgray" }}>
          <h2>Your Order</h2>
        </div>
        <div
          style={{
            height: "250px",
            border: "1px solid lightgray",
            position: "relative",
            overflow: "auto"
          }}
        >
          <div>
            {vendingMachineNewOrder.order_details.map(order_detail => (
              <div style={{ display: "flex" }}>
                <div style={{ width: "150px" }}>
                  <span>
                    <small>{order_detail.item_name}</small>
                  </span>
                </div>
                <div style={{ width: "60px" }}>
                  <span>
                    <small>$ {order_detail.item_amount}</small>
                  </span>
                </div>
                <div>
                  <span>
                    <small>
                      Preparation time: {order_detail.processing_time}s
                    </small>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ position: "absolute", bottom: "40px", right: "5px" }}>
            <span style={{ marginRight: "10px" }}>
              <small>
                <b>Payment: </b>
              </small>
              $ {vendingMachineNewOrder.total_amount || 0}
            </span>
            <span>
              <small>
                <b>Total preparation time: </b>
              </small>
              {vendingMachineNewOrder.total_processing_time || 0}s
            </span>
          </div>
          <div style={{ position: "absolute", bottom: "5px", right: "5px" }}>
            <button onClick={this.handleNewOrder}>Add Order</button>
          </div>
        </div>
        <div style={{ textAlign: "center", border: "1px solid lightgray" }}>
          <h2>Delivered Orders</h2>
        </div>
        <OrderList />

        <ToastProvider
          placement="bottom-right"
          ref={el => (this.notificationMessages = el)}
        />
      </Fragment>
    );
  }
}

OrderInfo.propTypes = {};

const mapStateToProps = state => ({
  isLoading: state.ui.isLoading,
  vendingMachineNewOrder: state.vendingMachineOrder.vendingMachineNewOrder
});

export default connect(mapStateToProps, {
  updateNotificationReference,
  addNewOrder
})(OrderInfo);
