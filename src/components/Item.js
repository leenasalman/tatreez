import React from "react";
import "./Item.css";

function Item(props) {
  return (
    <>
      <li className="item">
        <a href={props.LinkUrl}>{props.Text}</a>
      </li>
    </>
  );
}
export default Item;
