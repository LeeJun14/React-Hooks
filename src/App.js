import React, { useState, useEffect, useRef } from 'react';

const useFullscreen = (callback) => {
  const element = useRef();

  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };

  const exitFull = () => {
    const checkFullScreen = document.fullscreenElement;
    if (checkFullScreen !== null) {
      document.exitFullscreen();
    }
    if (callback && typeof callback === "function") {
      callback(false);
    }
  }
  return { element, triggerFull, exitFull };
}

const App = () => {
  const onFulls = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  }
  const { element, triggerFull, exitFull } = useFullscreen(onFulls);

  return (
    <div className='App' style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          src="https://i.ibb.co/R6RwNxx/grape.jpg"
          alt="grape"
          width="250">
        </img>
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div >
  );
}


export default App;