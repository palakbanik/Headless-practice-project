import GooglePlay from "../assets/colorGooglePlayStore.png";
import AppStore from "../assets/appStore.png";
import Arrow from "../assets/arrow.png";
import Phone from "../assets/Iphone 12 Max.png";

export default function InstallSection() {
  return (
    <>
      <section className="bg-purple-200 my-20 mx-auto py-10">
        <div className="relative flex lg:items-center lg:justify-around">
          <div className="relative flex flex-col mx-8">
            <div className="flex flex-col leading-relaxed lg:w-[500px]">
              <h1 className="px-auto py-3 font-bold text-2xl md:text-4xl xl:text-5xl">
                Download Our App and Have Access to Digital Art On The Go
              </h1>
              <p className="text-textHeadingColor pb-7">
                Carry our digital art library in your pocket with the ImageQuest
                mobile app - Discover, Download, Create.
              </p>
            </div>
            <div className="flex gap-3 pb-28">
              <img src={GooglePlay} alt="" className="w-40 " />
              <img src={AppStore} alt="" className="w-36 " />
            </div>
            <div className="">
              <img src={Arrow} alt="" className="absolute bottom-0 left-40" />
            </div>
          </div>

          <div className="">
            <img
              src={Phone}
              alt=""
              className="hidden lg:block absolute right-36 -top-14  w-auto h-[500px] xl:h-[550px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
