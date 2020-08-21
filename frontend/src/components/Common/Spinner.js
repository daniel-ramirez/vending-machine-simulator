import React from "react";

// Spinner
export const Spinner = () => (
  <div className="container text-center">
    <i className="text-success fas fa-spinner fa-spin" />
    <i>
      <small className="text-success"> Loading...</small>
    </i>
  </div>
);
