import React from 'react'


const Content = (props) => {
    const {allTabs, currentTabIndex} = props;

    return(
        <div className="results">
            { allTabs[currentTabIndex].content}
        </div>
            
    )
}

export default Content;