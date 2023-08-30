import './App.css';
import { useState } from 'react';


const useInput = (initialValue, vaildator) => {

  const [value, setValue] = useState(initialValue);

  const onChange = event => {

    const {
      target: { value }
    } = event;

    let willUpdate = true;
    if (typeof vaildator === "function") {
      willUpdate = vaildator(value);
    }
    if (willUpdate) {
      setValue(value)
    };
  };
  return { value, onChange };
};

const App = () => {

  const maxLen = value => value.length <= 10;

  const name = useInput("Mr.", maxLen);

  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder='Name' value={name.value} onChange={name.onChange}></input>
    </div>
  );
};

export default App;
