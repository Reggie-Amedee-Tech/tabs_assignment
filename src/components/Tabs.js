import React from 'react'

const Tabs = (props) => {
    const { allTabs, currentTabIndex, setCurrentTabIndex } = props;

    const tabStyle = (index) => {
        if (index === currentTabIndex) {
            return "selectedTab"
        } else {
            return "nonSelectedTab"
        }
    }

    const setSelectedTab = (index) => {
        setCurrentTabIndex(index);
    }

    return (
        <div style={{margin: "auto", width: "85%", textAlign: "left"}}>
        {
            allTabs.map((tab, index) =>
            <div className={`tab ${tabStyle(index)}`} onClick={(e) => setSelectedTab(index)}>
                {tab.label}
            </div>
            )
        }









        </div>


        )
}

export default Tabs