import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="flex gap-3">
        <button
          onClick={toggleDropdown}
          className=" bg-textHeadingColor text-white rounded-md w-full flex "
        >
          BROWSER CONTENT
          <i className="ri-arrow-down-s-line ml-2"></i>
        </button>
      </div>
      {isOpen && (
        <ul className=" w-full border-none bg-textHeadingColor ">
          <li className=" menuList  py-2 pl-14 cursor-pointer"> 3D MODELS</li>
          <li className=" menuList py-2 pl-14 cursor-pointer">
            CREATIVE BLOGS
          </li>
          <li className=" menuList py-2 pl-14 cursor-pointer">FREE RESOURCE</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
