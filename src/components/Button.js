import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button(props) {
  return (
    <>
      <Link className={"btn tatreez-primary-btn "+props.additionalClass} to={props.pagePath}>{props.Title}</Link>
    </>
  );
}

export default Button;
