import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

function Item(props) {
  return (
    <>
      <li className="item">
        <Link to={props.LinkUrl}>{props.Text}</Link>
      </li>
    </>
  );
}
export default Item;
