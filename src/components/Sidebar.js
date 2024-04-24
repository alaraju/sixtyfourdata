// components/Sidebar.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChartBar, faCog, faHome, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const sidebarData = [
    { id: 1, icon: faHome, text: "Dashboard" },
    { id: 2, icon: faChartBar, text: "Reports" },
    { id: 3, icon: faCog, text: "Settings" }
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      {/* Toggle Button */}
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>

      {/* Sidebar Items */}
      <div className="sidebar-items">
        {sidebarData.map(item => (
          <a key={item.id} href="#">
            <FontAwesomeIcon icon={item.icon} className={isOpen ? 'icon-open'
: 'icon-closed'} />
{isOpen && <span className="sidebar-text">{item.text}</span>}
</a>
))}
</div>
</div>
);
}

export default Sidebar;