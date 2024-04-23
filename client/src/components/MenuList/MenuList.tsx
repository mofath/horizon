import React, { useState } from "react";
import "./MenuList.scss";

interface MenuListProps {
  tabs: string[];
  children: React.JSX.Element[];
}

const MenuList: React.FC<MenuListProps> = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      <div className="tabs-list-container">
        <ul className="tabs-list">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`tab ${index === activeTab ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
      <div className="children-container">
        {React.Children.map(children, (child, index) =>
          index === activeTab ? child : null
        )}
      </div>
    </div>
  );
};

export default MenuList;
