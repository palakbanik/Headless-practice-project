import InspirationImage1 from "../assets/inspirations_1.png";
import InspirationImage2 from "../assets/inspirations_2.png";
import InspirationImage3 from "../assets/inspirations_3.png";
import BigFont from "./BigFont";
import InspirationSecImg from "./InspirationSecImg";
import TransparentBtn from "./TransparentBtn";

const InspirationSection = () => {
  return (
    <>
      <div className="py-10 flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-5">
          <BigFont
            fontMove={true}
            text={"Inspirations & Insights Of The Digital Art"}
          />

          <div className="flex flex-col gap-5 lg:gap-10 container lg:grid lg:grid-cols-2 xl:grid-cols-3">
            <InspirationSecImg InspiImg={InspirationImage1} />
            <InspirationSecImg InspiImg={InspirationImage2} />
            <InspirationSecImg InspiImg={InspirationImage3} />
          </div>
        </div>
        <TransparentBtn text={"Read more blog"} />
      </div>
    </>
  );
};
export default InspirationSection;
