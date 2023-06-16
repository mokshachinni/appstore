// Write your code here

import './index.css'

const TabItem = props => {
  const {tabsList, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabsList

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  const activeTabItem = isActive ? 'active-btn' : ''

  return (
    <li className="tabitem-list-container">
      <button
        type="button"
        onClick={onClickTabItem}
        className={`button ${activeTabItem}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
