import React from "react";
import css from "./style.module.css";

const Order = (props) => {
  return <div className={css.Order}>
    
    <p>Ingredients: "Bacon: {props.order.orts.bacon} | Salad: { props.order.orts.salad } | Meat: {props.order.orts.meat} | Cheese: {props.order.orts.cheese}"</p>
    <p>Address : {props.order.address.name} | { props.order.address.street } | {props.order.address.city}</p>
    <p>Price unit: <strong>{props.order.dun}₮</strong></p>
  </div>;
};
export default Order;
