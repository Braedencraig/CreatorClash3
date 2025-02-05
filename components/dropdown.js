import { cloneElement, useRef, useEffect } from "react";

const Dropdown = ({ trigger, menu, open, setOpenDropdown }) => {

  const rootRef = useRef(null);

  const handleOpen = () => {
    setOpenDropdown(!open);
  };

  useEffect(() => {
    if (!open) return;

    function handleWindowClick(e) {
      if (! rootRef.current?.contains(e.target)) {
        setOpenDropdown(false);
      }
    }

    window.addEventListener('click', handleWindowClick);

    return () => {
      window.removeEventListener('click', handleWindowClick)
    }
  }, [open, setOpenDropdown]);

  return (
    <div ref={rootRef} className="dropdown">
      {cloneElement(trigger, {
        onClick: handleOpen,
      })}
      {open ? (
        <ul className="menu">
          {menu.map((menuItem, index) => (
            <li key={index} className="menu-item">
              {cloneElement(menuItem, {
                onClick: () => {
                  if (menuItem.props.onClick) menuItem.props.onClick();
                  setOpenDropdown(false);
                },
              })}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
