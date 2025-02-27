import smallImage1 from "../assets/smart_small_1.png";
import smallImage2 from "../assets/smart_small_2.png";
import smallImage3 from "../assets/smart_small_3.png";
import bigImage from "../assets/smart_big_image.png";
import BigFont from "./BigFont";

const SectionSmart = () => {
  return (
    <>
      <section className="py-20 container">
        <BigFont
          text="Smart Art Suggestions  to Elevate Your Creative Projects"
          fontMove={true}
        />

        <div className="mt-12 lg:flex lg:flex-row-reverse items-center xl:gap-14 justify-between container">
          <div className="">
            <div className="flex flex-col items-center text-center  pb-7 lg:items-start lg:text-start">
              <img src={smallImage1} alt="small image" className="w-12" />
              <h3 className="font-bold leading-loose mt-3 mb-1 lg:text-left">
                Personalized Art Suggestion
              </h3>
              <p className="text-textHeadingColor text-sm ">
                Receive handpicked digital art suggestions based on your
                preferences and past downloads.
              </p>
            </div>
            <div className="flex flex-col items-center text-center  pb-7 lg:items-start lg:text-start">
              <img src={smallImage2} alt="small image" className="w-12" />
              <h3 className="font-bold leading-loose mt-3 mb-1 lg:text-left">
                High Quality & Premium Stock Images
              </h3>
              <p className="text-textHeadingColor text-sm ">
                Explore a diverse library of stunning premium stock images for
                all your creative endeavors.
              </p>
            </div>
            <div className="flex flex-col items-center text-center  pb-7 lg:items-start lg:text-start">
              <img src={smallImage3} alt="small image" className="w-12" />
              <h3 className="font-bold leading-loose mt-3 mb-1 lg:text-left">
                Explore Trending Styles
              </h3>
              <p className="text-textHeadingColor text-sm ">
                Stay ahead of the curve with trending digital art styles and
                techniques in-demand artistic trends to elevate your creations
              </p>
            </div>
          </div>
          <div>
            <img src={bigImage} alt="image" className="px-5 md:container" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionSmart;
