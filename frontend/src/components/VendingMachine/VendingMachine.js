import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import {
  updateNotificationReference,
  fetchVendingMachines
} from "../../actions/VendingMachineActions";
import { addToOrderDetail } from "../../actions/OrderActions";
import Item from "./Item";
import OrderInfo from "./OrderInfo";

class VendingMachine extends Component {
  notificationMessages = null;
  componentDidMount() {
    const { updateNotificationReference, fetchVendingMachines } = this.props;
    updateNotificationReference({ reference: this.notificationMessages });
    fetchVendingMachines();
  }

  handleItemSelection = item => {
    const { vendingMachineNewOrder, addToOrderDetail } = this.props;

    vendingMachineNewOrder.order_details.push({
      item_id: item._id,
      item_name: item.name,
      item_amount: item.amount,
      processing_time: item.processing_time,
      quantity: 1
    });

    const newOrderData = {
      ...vendingMachineNewOrder,
      total_amount:
        (vendingMachineNewOrder.total_amount ||
          vendingMachineNewOrder.total_amount ||
          0) + item.amount,
      total_processing_time:
        (vendingMachineNewOrder.total_processing_time ||
          vendingMachineNewOrder.total_processing_time ||
          0) + item.processing_time,
      status: "A"
    };

    addToOrderDetail(newOrderData);
  };

  handleNewOrder() {
    const { vendingMachineNewOrder } = this.props;

    //addNewOrder(vendingMachineNewOrder);
  }

  render() {
    const { vendingMachineItems } = this.props;
    // Return main content
    return (
      <div style={{ marginTop: "10px" }}>
        <div style={{ textAlign: "center", border: "1px solid lightgray" }}>
          <h1>Vending Machine Simulator</h1>
        </div>
        <div
          style={{
            height: "100%",
            display: "flex",
            border: "1px solid lightgray"
          }}
        >
          <div style={{ width: "60%", border: "1px solid lightgray" }}>
            <div style={{ textAlign: "center", border: "1px solid lightgray" }}>
              <h2>Select Your Favorite Snack</h2>
            </div>
            <div style={{ height: "602px", border: "1px solid lightgray" }}>
              <div className="card-group" style={{ display: "flex" }}>
                {vendingMachineItems.map(item => (
                  <Item
                    key={item._id}
                    {...item}
                    onItemSelection={this.handleItemSelection}
                  />
                ))}
              </div>
            </div>
          </div>
          <div
            style={{
              width: "40%",
              display: "block",
              border: "1px solid lightgray"
            }}
          >
            <OrderInfo />
          </div>
        </div>

        <ToastProvider
          placement="bottom-right"
          ref={el => (this.notificationMessages = el)}
        />
      </div>
    );
  }
}

VendingMachine.propTypes = {};

const mapStateToProps = state => ({
  isLoading: state.ui.isLoading,
  vendingMachineItems: state.vendingMachine.vendingMachineItems,
  vendingMachineNewOrder: state.vendingMachineOrder.vendingMachineNewOrder
});

export default connect(mapStateToProps, {
  updateNotificationReference,
  fetchVendingMachines,
  addToOrderDetail
})(VendingMachine);
