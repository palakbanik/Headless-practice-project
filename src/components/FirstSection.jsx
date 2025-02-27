import "../index.css";
import Discover1 from "../assets/discover_1.png";
import Discover2 from "../assets/discover_2.png";
import Discover3 from "../assets/discover_3.png";
import Discover4 from "../assets/discover_4.png";
import FirstSectionImage from "./FirstSectionImage";
import TransparentBtn from "./TransparentBtn";
import BigFont from "./BigFont";

const FirstSection = () => {
  return (
    <>
      <section className="px-4 py-20">
        <div className="my-10">
          <div className="flex justify-between items-center lg:container mb-6 ">
            <BigFont text={"Discover Trending Categories"} />
            <button className="transparentBtn hidden md:block md:mr-14 lg:mr-1 md:mb-8">
              Explore all categories
            </button>
          </div>

          <div className="flex flex-col items-center">
            <div className="container discoverDiv grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 relative">
              <i className="fa-solid fa-arrow-left absolute hidden lg:block top-1/2 left-0 bg-white shadow-xl px-4 py-2 text-xl cursor-pointer text-gray-600 bg-opacity-95 rounded-full hover:-translate-x-2 duration-300"></i>

              <FirstSectionImage imageSrc={Discover1} />
              <FirstSectionImage imageSrc={Discover2} />
              <FirstSectionImage imageSrc={Discover3} />
              <FirstSectionImage imageSrc={Discover4} />

              <i className="fa-solid fa-arrow-right absolute hidden lg:block top-1/2 right-3  bg-white shadow-xl px-4 py-2 text-xl cursor-pointer text-gray-600 bg-opacity-95 rounded-full hover:translate-x-2 duration-300"></i>
            </div>
            <TransparentBtn
              increaseBtn={true}
              text={"Explore all categories"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstSection;
