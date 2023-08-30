import React, { useState } from "react";
import ReactDOM from "react-dom";

const content = [
  {
    tab: "section 1",
    content: "I'm the content of the Section 1",
  },

  {
    tab: "section 2",
    content: "I'm the content of the Section 2",
  }
];

const useTabs = (initialTab, allTabs) => {
  const [curIndex, setCurIndex] = useState(initialTab);

  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    curItem: allTabs[curIndex],
    changeItem: setCurIndex
  }
}

const App = () => {
  const { curItem, changeItem } = useTabs(0, content);
  return (
    <div className='App'>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      {curItem.content}
    </div>
  );
}

export default App;