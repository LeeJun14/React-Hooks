import React, { useState, useEffect, useRef } from 'react';
import { ReactDOM } from 'react';

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotifi = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  }
  return fireNotifi;
};



const App = () => {
  const triggerNotifi = useNotification("Can I steal your heart");

  return (
    <div className='App' style={{ height: "1000vh" }}>
      <button onClick={triggerNotifi}>Hello</button>
    </div>
  );
}

export default App;