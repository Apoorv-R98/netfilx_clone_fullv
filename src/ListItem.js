import React from "react";
import "./ListItem.css";
import { useHistory } from "react-router";

function ListItem(props) {
  return (
    <div>
      <li className="item">{props.text}</li>
    </div>
  );
}

export default ListItem;
