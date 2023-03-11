import React from "react";

export default props => {
  const onSelect = () => props.onProduct(props.details.type);
  return (
    <div className="spacer">
      <button
        className={
          "btn " +
          props.details.type.toLowerCase() +
          (!props.details.quantity ? " disabled" : "")
        }
        disabled={!props.details.quantity}
        onClick={onSelect}
      >
        {props.details.type}
      </button>
      <small className="price">{props.details.price}</small>
    </div>
  );
};
