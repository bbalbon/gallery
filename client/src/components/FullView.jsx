import React from "react";
const FullView = props => {
  let space = "";
  return (
    <div className="fullViewShadow">
      <div className="fullView" onClick={props.fullView}>
        <i className="fa fa-expand" aria-hidden="true">
          Full View
        </i>
        <i className="fullViewButton"></i>
      </div>
    </div>
  );
};

export default FullView;
