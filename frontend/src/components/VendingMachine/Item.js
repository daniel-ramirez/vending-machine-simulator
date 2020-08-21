import React from "react";
import user from "../../logo.svg";

const Item = (props) => (
  <div
    className="card text-center mt-2 mr-2 mb-2 ml-2 product-detail"
    style={{
      border: "solid 1px lightgray",
      margin: "5px",
      padding: "5px",
      "text-align": "center",
      width: "100px",
    }}
    onClick={() => props.onItemSelection(props._id)}
  >
    <img
      className="card-img-top mx-auto"
      src={user}
      alt="User"
      style={{ width: "60px" }}
    />
    <div className="card-body">
      <span>
        <small>
          {props.name} {props.amount}
        </small>
      </span>
      <span>
        <p>
          <small>{props.processing_time}</small>
        </p>
      </span>
    </div>
  </div>
);

export default Item;
