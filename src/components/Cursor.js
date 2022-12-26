import React, { useEffect } from "react";
import "./Cursor.css";

function Cursor() {
  useEffect(() => {
    let smallCursor = document.querySelector(".cursor--small");
    let largeCursor = document.querySelector(".cursor--large");

    window.addEventListener("mousemove", cursor);

    function cursor(e) {
      smallCursor.style.top = e.pageY + "px";
      smallCursor.style.left = e.pageX + "px";

      largeCursor.style.top = e.pageY + "px";
      largeCursor.style.left = e.pageX + "px";
    }
  });
  return (
    <>
      <div className="cursor cursor--large"></div>
      <div className="cursor cursor--small"></div>
    </>
  );
}

export default Cursor;
