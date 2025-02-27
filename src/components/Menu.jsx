import whiteLogo from "../assets/white_logo.png";
import star from "../assets/star.png";
import bookmark from "../assets/bookmark.png";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";

const Menu = (props) => {
  function closeHandler() {
    props.setMenu(false);
  }
  return (
    <>
      <div
        className={`bg-textHeadingColor w-[100%] h-[100vh]  absolute top-0 transition-transform duration-300 ${
          props.menu ? "left-[0]" : "left-[-100%]"
        } lg:hidden z-50`}
      >
        <div className="bg-black px-8 py-3 flex items-center justify-between z-10">
          <img
            src={whiteLogo}
            style={{ width: "140px", height: "auto" }}
            alt="white logo"
          />
          <i
            className="ri-close-large-line  text-white text-xl cursor-pointer"
            onClick={closeHandler}
          ></i>
        </div>

        <div className="">
          <ul className="text-white w-[100%] h-[100%] ">
            <li className="listItem">
              <a href="#">HOME</a>
            </li>
            <li className="listItem">
              <a href="#">
                <Dropdown />
              </a>
            </li>
            <li className="listItem">
              <a href="#">VIDEO</a>
            </li>
            <li className="listItem flex gap-1">
              <img src={star} alt="" />
              <a href="#">AI GENERATED</a>
            </li>
            <li className="listItem">
              <Dropdown2 />
            </li>
            <li className="listItem flex gap-3">
              <img src={bookmark} className="w-5" alt="" />
              <a href="#" className="">
                FAVORITES
              </a>
            </li>
            <li className="listItem flex gap-3">
              <button className="linearBtn text-lg">Get Involved</button>
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-center items-center gap-5 mt-10 text-white">
          <a href="#" className="btn ">
            Sign Up
          </a>
          <a href="#" className="underline underline-offset-2">
            Contributor Account
          </a>
        </div>
      </div>
    </>
  );
};
export default Menu;
