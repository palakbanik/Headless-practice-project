import Assets1 from "../assets/assets_1.png";
import Assets2 from "../assets/assets_2.png";
import Assets3 from "../assets/assets_3.png";
import Assets4 from "../assets/assets_4.png";
import Contri from "../assets/contri.png";
import BigFont from "./BigFont";
import ContributorSecImg from "./ContributorSecImg";
import TransparentBtn from "./TransparentBtn";

const ContributorSection = () => {
  return (
    <>
      <div className="mb-10 ">
        <div className="flex flex-col items-center gap-5">
          <BigFont
            contributor={true}
            text={"Best Weekly Contributor Assets Only for You"}
          />

          <div className="grid grid-cols-2 lg:flex">
            <ContributorSecImg assets={Assets1} contri={Contri} />
            <ContributorSecImg assets={Assets2} contri={Contri} />
            <ContributorSecImg assets={Assets3} contri={Contri} />
            <ContributorSecImg assets={Assets4} contri={Contri} />
          </div>
          <TransparentBtn text={"Discover all AI images"} />
        </div>
      </div>
    </>
  );
};
export default ContributorSection;
