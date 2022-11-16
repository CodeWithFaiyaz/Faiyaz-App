import React from "react";

function Alert(props) {
  return (
  props.arror &&  <div>
      <div className="alert alert-warning alert-dismissible fade show text-center" role="alert">
     {props.arror.msg} And {props.arror.ty}
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
}

export default Alert;
