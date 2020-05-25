import React from "react";
import ReactDOM from "react-dom";

const modal = ({ title, content, actions, onDismiss }) => {
  return ReactDOM.createPortal(
    <div
      className="ui dimmer modals visible active"
      onClick={onDismiss}
    >
      <div
        className="ui standar modal visible active"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="header">{title}</div>
        <div className="content">{content}</div>
        <div className="actions">{actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default modal;
