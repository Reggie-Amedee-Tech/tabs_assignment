
import Tabs from './components/Tabs'
import Content from './components/Content'
import React, { useState } from 'react'
import './App.css';

function App() {
  const tabsArray = [
    { label: "Tab 1", content: "Tab 1 content is showing here" },
    { label: "Tab 2", content: "Tab 2 content is showing here" },
    { label: "Tab 3", content: "Tab 3 content is showing here" },
    { label: "Tab 4", content: "Tab 4 content is showing here" }
  ]

  const [allTabs, setAllTabs] = useState(tabsArray)
  const [currentTabIndex, setCurrentTabIndex] = useState(0)



  /* const cycleContent = (defaultTab) => {
    if (defaultTab[0]) {
      <p>Home content goes here</p>
    } else if (defaultTab[1]) {
      <p>About content goes here</p>
    } else if (defaultTab[2]) {
      <p>About content goes here</p>
    }
  }
*/
  return (
    <div className="App">
      <Tabs
        allTabs={allTabs}
        currentTabIndex={currentTabIndex}
        setCurrentTabIndex={setCurrentTabIndex} />
      <Content
        allTabs={allTabs}
        currentTabIndex={currentTabIndex} />

    </div>
  );
}

export default App;
