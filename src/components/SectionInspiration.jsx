import CollectImage1 from "../assets/collect_image_1.jpg.png";
import CollectImage2 from "../assets/collect_image_2.jpg.png";
import CollectImage3 from "../assets/collect_image_3.jpg.png";
import CollectImage4 from "../assets/collect_image_4.jpg.png";
import CollectImage5 from "../assets/collect_image_5.jpg.png";
import CollectImage6 from "../assets/collect_image_6.jpg.png";
import CollectImage7 from "../assets/collect_image_7.jpg.png";
import CollectImage8 from "../assets/collect_image_8.jpg.png";
import CollectImage9 from "../assets/collect_image_9.jpg.png";
import BigFont from "./BigFont";
import TransparentBtn from "./TransparentBtn";
import SecInspirationImg from "./SecInspirationImg";

const SectionInspiration = () => {
  return (
    <>
      <section className="my-6 pb-5 bg-green-100 ">
        <div className="my-16 bg-green-100 flex flex-col items-center container">
          <div className=" bg-green-100 py-16 flex justify-around items-center container">
            <BigFont text={"Collect Your Daily Inspiration"} />
            <button className="transparentBtn capitalize hidden lg:block ">
              explore collection
            </button>
          </div>

          <div className="lg:grid lg:grid-cols-2 xl:grid-cols-3">
            <SecInspirationImg
              img1={CollectImage1}
              img2={CollectImage2}
              img3={CollectImage3}
              text={"Aesthetic"}
            />
            <SecInspirationImg
              img1={CollectImage4}
              img2={CollectImage5}
              img3={CollectImage6}
              text={"Nature"}
            />
            <SecInspirationImg
              img1={CollectImage7}
              img2={CollectImage8}
              img3={CollectImage9}
              text={"Unspecified"}
            />
          </div>
          <TransparentBtn text={"Explore collection"} />
        </div>
      </section>
    </>
  );
};

export default SectionInspiration;
