import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "react-bootstrap-icons";

const RecursiveMenu = ({ items, isRoot = true }) => {
  const [openItems, setOpenItems] = useState({});

  const toggle = (name) => {
    setOpenItems((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <ul
      className={`list-unstyled m-0 ${isRoot ? "sidebar" : "submenu"}`}
      /* only top UL gets sidebar */
    >
      {items.map((item) => {
        const isOpen = openItems[item.name];
        const hasChildren = !!item.children;

        return (
          <li key={item.name}>
            <div
              className="menu-item d-flex"
              style={{ cursor: hasChildren ? "pointer" : "default" }}
              onClick={() => hasChildren && toggle(item.name)}
            >
              {/* <span>{item.name}</span> */}
              {hasChildren && (
                <span className="toggle-icon">
                  {isOpen ? <ChevronDown /> : <ChevronRight />}
                </span>
              )}
              <span>{item.name}</span>
            </div>

            {hasChildren && isOpen && (
              <RecursiveMenu
                items={item.children.map((child) =>
                  typeof child === "string" ? { name: child } : child
                )}
                isRoot={false}   // <- tell child menus not to add sidebar class
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default RecursiveMenu;
