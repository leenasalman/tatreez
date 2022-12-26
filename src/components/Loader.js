import React, { useState } from "react";
import "./Loader.css";
import music from "../Assets/Audio/TraditionalMusic.mp3";

function Loader() {
  const [isActive, setIsActive] = useState(false);
  var audio = new Audio(music);
  window.onload = (event) => {
    var playing = false;
    var audioPlayer = document.getElementById("audioPlayer");
    
    setTimeout(() => {
      //enter website
      audio.volume = 0.09;
      audio.play();
      playing = true;
      setIsActive(playing);
    }, 100);
    var lines = document.querySelectorAll(".line");
    //play audio lines
    setInterval(() => {
      for (let i = 0; i < lines.length; i++) {
        lines[i].style.transform = `translate3d(0px, 0px, 0px) scale(1, ${
          Math.random() * 1.0222
        })`;
      }
    }, 100);

    function playPause() {
      if (!playing) {
        audio.volume = 0.09;
        audio.play();
        playing = true;
        setIsActive(playing);
      } else {
        audio.pause();
        playing = false;
        setIsActive(playing);
      }
    }
    audioPlayer.addEventListener("click", playPause);
  };

  return (
    <>
      <div
        className={isActive ? "audio-player playing" : "audio-player paused"}
        id="audioPlayer"
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </>
  );
}

export default Loader;
