import './DropdownMenu.css';

import React, { useState, useEffect, useRef } from 'react';

function DropdownMenu(props) {
  //NavItem Functions
  const [open, setOpen] = useState(false);

  const setClassName = (strang, identifier) => {
    const classArr = [strang];
    if (open) classArr.push(`opened-${identifier}`)
    else classArr.push(`closed-${identifier}`)
    return classArr.join(' ')
  }

  //DropdownItem
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  const dropdownStyle = (open) => ({
    //visibility: (open) ? `visible` : `hidden`,
    opacity: (open) ? `1` : `0`,
    height: (open) ? `200px` : `0px`,
    /*the height = 200px is a temp fix, can't get menuHeight to work :( */
  });

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
    return height;
  }


  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div>
      <li className="nav-item">
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
          <div className={setClassName("hamburger", 0)}><div></div></div>
        </a>
        <div className={setClassName("dropdown", 1)} onEnter={calcHeight} style={dropdownStyle(open)}>
          <DropdownItem leftIcon="🧫" rightIcon="❗">Order Online</DropdownItem>
          <DropdownItem leftIcon="🧉">Drinks</DropdownItem>
          <DropdownItem leftIcon="📍">Location</DropdownItem>
        </div>
      </li>

    </div>
  );
}

export default DropdownMenu;
