import React, { useState } from "react";

const TabSlider = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tab-slider">
      <div className="tab-slider__tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-slider__tab ${
              activeTab === index ? "tab-slider__tab--active" : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-slider__content">{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabSlider;

<TabSlider
  tabs={[
    {
      label: "Tab 1",
      content: <div>Content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>Content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <div>Content for Tab 3</div>,
    },
  ]}
/>;
