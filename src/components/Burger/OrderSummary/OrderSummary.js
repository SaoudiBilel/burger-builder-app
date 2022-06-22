import React from "react";
import Auxiliary from "../../../hoc/Auxiliary";
import classes from "./OrderSummary.css";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}:</span>{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>A deliciour burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
      <button>CANCEL</button>
      <button>CONTINUE</button>
    </Auxiliary>
  );
};

export default OrderSummary;
