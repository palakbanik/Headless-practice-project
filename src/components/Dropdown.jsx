import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <div className="flex gap-3">
        <button
          onClick={toggleDropdown}
          className=" bg-textHeadingColor text-white rounded-md w-full flex "
        >
          IMAGE
          <i className="ri-arrow-down-s-line ml-2"></i>
        </button>
      </div>
      {isOpen && (
        <ul className=" w-full border-none bg-textHeadingColor ">
          <li className=" ml-14 menuList py-2 cursor-pointer">IMAGES</li>
          <li className=" ml-14 menuList py-2 cursor-pointer">VECTORS</li>
          <li className=" ml-14 menuList py-2 cursor-pointer">PAINTINGS</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
