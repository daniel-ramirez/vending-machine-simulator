import React from "react";
import writtenNumber from "written-number";

export const renderHTML = rawHTML =>
  React.createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } });

export const getWrittenAmount = amount => {
  writtenNumber.defaults.lang = "es";

  // Get decimal amount value
  const decimalAmount = (amount % 1)
    .toFixed(2)
    .split(".")
    .pop();

  let writtenAmount = writtenNumber(Math.floor(Math.abs(amount)));
  writtenAmount = `${writtenAmount.charAt(0).toUpperCase() +
    writtenAmount.slice(1)} ${decimalAmount}/100 dólares`;

  return writtenAmount;
};
