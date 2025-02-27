import whiteLogo from "../assets/white_logo.png";
import logo from "../assets/logo.svg";
import star from "../assets/star.png";
import { useState } from "react";
import Menu from "./Menu";

function Header() {
  const [menu, setMenu] = useState(false);

  function menuClickHandler() {
    setMenu(true);
  }

  return (
    <>
      {/* ====================== NAVBAR ====================== */}

      <nav className="bg-black py-5 lg:hidden w-full h-auto fixed top-0 left-0 z-50">
        <div className="flex justify-between items-center container px-4">
          <a href="#">
            <img src={whiteLogo} alt="logo" className="w-36 h-auto" />
          </a>

          <div className="flex items-center justify-center gap-5 text-white">
            <i className="ri-shopping-cart-2-line text-2xl cursor-pointer"></i>
            <button className="text-xs border border-white rounded-sm px-3 py-1">
              Log in
            </button>
            <i
              className="fa-solid fa-bars text-2xl cursor-pointer "
              onClick={menuClickHandler}
            ></i>
          </div>
        </div>
      </nav>
      <Menu menu={menu} setMenu={setMenu} />

      <nav className="bg-white py-5 hidden lg:block">
        <div className="flex justify-between items-center container">
          <a href="#">
            <img src={logo} alt="logo" className="w-48 h-auto" />
          </a>

          <div className="flex items-center justify-center gap-10 text-textColor">
            <a
              href="#"
              className=" text-md cursor-pointer underline underline-offset-1 text-textColor"
            >
              ContriButor Account
            </a>
            <button className="text-md text-white bg-textColor font-semibold border-2 border-textColor rounded-md px-8 xl:px-9 py-3">
              Login
            </button>
            <button className="text-md text-textColor bg-white font-semibold border-2 border-black rounded-md px-8 xl:px-9 py-3">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      <nav className="fixed top-0 right-0 w-full h-auto z-50 bg-textColor text-white py-5 hidden lg:block ">
        <div className="flex mr-10 items-center justify-between">
          <div className="flex items-center gap-5 xl:gap-8 ml-10">
            <select className="bg-textColor text-lg border border-black cursor-pointer">
              <option value="image" className="selectOption cursor-pointer">
                IMAGES
              </option>
              <option value="vector" className="selectOption cursor-pointer">
                VECTORS
              </option>
              <option value="painting" className="selectOption cursor-pointer">
                PAINTINGS
              </option>
            </select>

            <ul className="flex items-center gap-5">
              <li>
                <a href="#">VIDEOS</a>
              </li>
              <li className="flex items-center gap-2">
                <img src={star} alt="star image" />
                <a href="#"> AI GENERATED</a>
              </li>
            </ul>

            <select className="bg-textColor text-lg border  border-black cursor-pointer">
              <option className="selectOption">BROWSER CONTENTS</option>
              <option value="3dModels" className="selectOption">
                3D MODELS
              </option>
              <option value="creativeBlogs" className="selectOption">
                CREATIVE BLOGS
              </option>
              <option value="freeResource" className="selectOption">
                FREE RESOURCES
              </option>
            </select>
          </div>

          <div className="flex items-center gap-10 mr-10">
            <button className="linearBtn">Get Involved</button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#FFFFFF"
            >
              <path
                d="M200-120v-640q0-33 23.5-56.5T280-840h240v80H280v518l200-86 200 86v-278h80v400L480-240 200-120Zm80-640h240-240Zm400 160v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"
                className="bookmark cursor-pointer "
              />
            </svg>
            <i className="ri-shopping-cart-2-line text-2xl xl:text-3xl cursor-pointer"></i>
          </div>
        </div>
      </nav>

      {/* ====================== HEADER ====================== */}
      <header className="header lg:-mt-1">
        <div className="container mainDiv ">
          <div className="mt-16 lg:mt-20">
            <h1 className="text-2xl pt-20 lg:text-5xl xl:text-6xl font-bold leading-snug opacity-100">
              Emotions through images.
            </h1>
            <p className="text-center text-base mt-3 lg:text-xl opacity-90">
              Explore curated collection of premium digital art to inspire your
              next creative masterpiece.
            </p>
          </div>
          <div className="relative w-full lg:w-9/12 xl:w-7/12 flex items-center rounded-md">
            <select className="bg-white text-black text-md lg:text-lg border-2 border-textHeadingColor border-opacity-20 mt-2 lg:mt-3 ml-2 lg:ml-3  w-14 lg:w-32 h-10 rounded-md absolute top-0 left-0  outline-none hover:border-black duration-200 opacity-70 hover:opacity-100 cursor-pointer">
              <option value="image" className="selectOption ">
                IMAGES
              </option>
              <option value="	aiGenerated" className="selectOption ">
                AI GENERATED
              </option>
              <option value="vector" className="selectOption ">
                VECTORS
              </option>
              <option value="painting" className="selectOption ">
                PAINTINGS
              </option>
              <option value="3dModels" className="selectOption ">
                3D MODELS
              </option>
            </select>

            <input
              className="w-full h-14 lg:h-16 pl-20 lg:pl-40 pr-16 border-none outline-none text-black rounded-sm text-sm lg:text-lg"
              type="text"
              placeholder="Search for best digital asset..."
            />
            <i className="ri-search-line absolute top-0 right-0 text-white text-3xl bg-black w-[57px] h-[57px] lg:w-[64px] lg:h-[64px] flex justify-center items-center rounded-sm cursor-pointer"></i>
          </div>

          <div className="flex items-center gap-3 lg:gap-10">
            <h3 className="hidden lg:block  bg-slate-50 px-2 py-1 bg-opacity-30 rounded-sm text-sm lg:text-lg lg:px-3 lg:py-2">
              Popular Searches
            </h3>
            <a
              src="#"
              className="ri-search-line bg-slate-800 px-2 py-1 bg-opacity-70 rounded-sm text-sm lg:text-lg lg:px-3 lg:py-2"
            >
              <a src="#" className="text-md lg:text-lg pl-2">
                e
              </a>
            </a>
            <a
              src="#"
              className="ri-search-line bg-slate-800 px-2 py-1 bg-opacity-70 rounded-sm text-sm lg:text-lg lg:px-3 lg:py-2"
            >
              <a src="#" className="text-md lg:text-lg pl-2">
                tests
              </a>
            </a>
            <a
              src="#"
              className="ri-search-line bg-slate-800 px-2 py-1 bg-opacity-70 rounded-sm text-sm lg:text-lg lg:px-3 lg:py-2"
            >
              <a src="#" className="text-md lg:text-lg pl-2">
                awesome
              </a>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
