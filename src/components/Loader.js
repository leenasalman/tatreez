import React, { useEffect, useState } from "react";
import "./Loader.css";
import music from "../Assets/Audio/TraditionalMusic.mp3";

function Loader() {
  var lines = document.querySelectorAll(".line");
  var audio = new Audio(music);
  var isPlaying = false;
  const [isActive, setIsActive ] = useState(false);
  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
      // setIsActive(false);
    } else {
      audio.volume = 0.05;
      audio.play();
      // setIsActive(true);
    }
  };
  useEffect(() => {
    audio.onplaying = function () {
      isPlaying = true;
    };
    audio.onpause = function () {
      isPlaying = false;
    };

    // play audio lines
    setInterval(() => {
      for (let i = 0; i < lines.length; i++) {
        lines[i].style.transform = `translate3d(0px, 0px, 0px) scale(1, ${
          Math.random() * 1.0222
        })`;
      }
    }, 100);
  });

  return (
    <>
      <div
        onClick={togglePlay}
        className="audio-player"
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
