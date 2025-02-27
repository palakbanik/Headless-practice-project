import Explore1 from "../assets/explore_1.png";
import Explore2 from "../assets/explore_2.png";
import Explore3 from "../assets/explore_3.png";
import Explore4 from "../assets/explore_4.png";
import Explore5 from "../assets/explore_5.png";
import Explore6 from "../assets/explore_6.png";
import Explore7 from "../assets/explore_7.png";
import Explore8 from "../assets/explore_8.png";
import Bookmark from "../assets/bookmark.png";
import SectionDigitalImg from "./SectionDigitalImg";
import BlackBtn from "./BlackBtn";
import BigFont from "./BigFont";

const SectionDigital = () => {
  return (
    <>
      <section>
        <BigFont
          text={"Explore A Vast Collection of Digital Art"}
          bgPurple={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          <SectionDigitalImg secImgSrc={Explore1} secBookmarkSrc={Bookmark} />
          <SectionDigitalImg
            setSize="setSize"
            secImgSrc={Explore2}
            secBookmarkSrc={Bookmark}
          />
          <SectionDigitalImg secImgSrc={Explore3} secBookmarkSrc={Bookmark} />
          <SectionDigitalImg secImgSrc={Explore4} secBookmarkSrc={Bookmark} />
          <SectionDigitalImg secImgSrc={Explore5} secBookmarkSrc={Bookmark} />
          <SectionDigitalImg secImgSrc={Explore6} secBookmarkSrc={Bookmark} />
          <SectionDigitalImg secImgSrc={Explore7} secBookmarkSrc={Bookmark} />
          <SectionDigitalImg secImgSrc={Explore8} secBookmarkSrc={Bookmark} />
        </div>
        <BlackBtn />
      </section>
    </>
  );
};

export default SectionDigital;
