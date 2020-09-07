import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { VendingMachine } from "./VendingMachine";
import Container from "@material-ui/core/Container";

class Main extends Component {
  render() {
    return (
      <Container>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={VendingMachine} />
          </Switch>
        </BrowserRouter>
      </Container>
    );
  }
}

export default Main;
