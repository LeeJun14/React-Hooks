import React, { useState, useEffect, useRef } from 'react';
import { ReactDOM } from 'react';

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function");
  const handle = () => {
    onBefore();
  }
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
}

const App = () => {
  const begForLife = () => console.log("Pls dont leave");
  useBeforeLeave(begForLife);

  return (
    <div className='App'>
      <h1>Hello</h1>
    </div>
  )
}

export default App;