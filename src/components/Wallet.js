import React from "react";

export default props => {
  return (
    <div>
      <span>Insert money</span>
      <div className="btn-group" style={{ marginLeft: 20 + "px" }}>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => props.onCash(2000)}
        >
          Rp 2.000
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => props.onCash(5000)}
        >
          Rp 5.000
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => props.onCash(10000)}
        >
          Rp 10.000
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => props.onCash(20000)}
        >
          Rp 20.000
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => props.onCash(50000)}
        >
          Rp 50.000
        </button>
      </div>
    </div>
  );
};
