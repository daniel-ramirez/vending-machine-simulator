import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import {
  updateNotificationReference,
  fetchVendingMachines,
} from "../../actions/VendingMachineActions";
import Item from "./Item";

class VendingMachine extends Component {
  componentDidMount() {
    const { updateNotificationReference, fetchVendingMachines } = this.props;
    updateNotificationReference({ reference: this.notificationMessages });
    fetchVendingMachines();
  }

  render() {
    const { vendingMachineItems } = this.props;
    // Return main content
    return (
      <div>
        <div>
          <h2>Vending Machine Simulator</h2>
        </div>
        <div className="card-group" style={{ display: "flex" }}>
          {vendingMachineItems.map((item) => (
            <Item
              key={item.id}
              {...item}
              onItemSelection={this.handleItemSelection}
            />
          ))}
        </div>

        <ToastProvider
          placement="bottom-right"
          ref={(el) => (this.notificationMessages = el)}
        />
      </div>
    );
  }
}

VendingMachine.propTypes = {};

const mapStateToProps = (state) => ({
  isLoading: state.ui.isLoading,
  vendingMachineItems: state.vendingMachine.vendingMachineItems,
});

export default connect(mapStateToProps, {
  updateNotificationReference,
  fetchVendingMachines,
})(VendingMachine);
