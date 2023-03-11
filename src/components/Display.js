import React from "react";

export default props => {
  return (
    <div>
      <div className="input-group">
        <span className="input-group-addon">Rp</span>
        <input
          type="text"
          className="form-control "
          placeholder="0"
          value={props.text}
          readOnly
        />
      </div>
    </div>
  );
};
