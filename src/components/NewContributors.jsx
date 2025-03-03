import NewContrib1 from "../assets/contributor_1.png";
import NewContrib2 from "../assets/contributor_2.png";
import NewContrib3 from "../assets/contributor_3.png";
import BigCircle from "../assets/big_circle.png";
import LeftCircle from "../assets/left_circle.png";
import RightCircle from "../assets/right_circle.png";
import Frame from "../assets/frame.png";

const NewContributors = () => {
  return (
    <>
      <div className=" lg:container mt-10 bg-bgSkyBlue relative ">
        <div className="">
          <img
            src={BigCircle}
            alt=""
            className="absolute bottom-0 w-auto h-96 md:left-[25%] lg:left-[26%] xl:left-[33%] flex items-center justify-center -"
          />
          <img
            src={LeftCircle}
            alt=""
            className="absolute left-0 top-0 w-16 md:w-20"
          />
          <img
            src={RightCircle}
            alt=""
            className="absolute right-0 top-0 w-16 md:w-20"
          />
          <img
            src={Frame}
            alt=""
            className="hidden lg:block absolute bottom-0 left-0 right-0 w-[100%]"
          />
        </div>

        <div className=" flex flex-col items-center text-center py-10 gap-5 ">
          <div className="flex items-center ">
            <img src={NewContrib1} alt="" className="w-10 h-10 -ml-3 z-10" />
            <img src={NewContrib2} alt="" className="w-10 h-10 -ml-3 z-10" />
            <img src={NewContrib3} alt="" className="w-10 h-10 -ml-3 z-10" />
            <i className="ri-add-circle-fill text-[2.7rem] -ml-3 text-[#3c3c3c] z-10"></i>
          </div>

          <div className="container z-50">
            <h2 className="font-bold text-2xl lg:text-4xl mb-6 z-10">
              Become A <span className="font-AlexBrush z-50">Contributor</span>{" "}
              Today
            </h2>
            <p className="mb-5 lg:text-xl z-10">
              Help us create the world's largest stock photo library, become a{" "}
              <br className="hidden md:block z-50" /> contributor and get paid
              for your assets.
            </p>
          </div>
          <button className="blackBtn md:text-xl z-10">Let's Contribute</button>
        </div>
      </div>
    </>
  );
};

export default NewContributors;
