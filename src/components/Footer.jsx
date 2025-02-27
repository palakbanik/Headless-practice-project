import FooterImage from "../assets/footer_image.png";
import BlackPlayStore from "../assets/black_play_store.png";
import BlackAppStore from "../assets/black_app_store.png";
import FooterBigImage from "../assets/footerBigImage.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-textColor py-10 text-white">
        <div className="flex flex-col items-center justify-center ">
          <div className="my-5 px-7 md:px-12 xl:px-16 md:flex md:gap-14 xl:container">
            <div className="">
              <img src={FooterImage} alt="" className="" />
            </div>

            <div className="mt-7 grid grid-cols-2 md:grid-cols-2 md:gap-9 lg:grid-cols-4 gap-7">
              {/* cart 1 */}
              <div className="flex flex-col gap-5 mb-2 xl:container">
                <h2 className="text-xl font-bold border-l-4 border-l-blue-400 pl-2">
                  CONTENT
                </h2>
                <ul className="footerList">
                  <li className="footerListItem">
                    <a href="#" className="w-full">
                      Royalty-free creative
                    </a>
                  </li>
                  <li className="footerListItem">
                    <a href="#" className="w-full">
                      Video
                    </a>
                  </li>
                  <li className="footerListItem">
                    <a href="#" className="w-full">
                      Editorial
                    </a>
                  </li>
                  <li className="footerListItem">
                    <a href="#" className="w-full">
                      Custom content
                    </a>
                  </li>
                  <li className="footerListItem">
                    <a href="#" className="w-full">
                      Creative collection
                    </a>
                  </li>
                  <li className="footerListItem">
                    <a href="#" className="w-full">
                      Become a contributor
                    </a>
                  </li>
                  <li className="footerListItem">
                    <a href="#" className="w-full">
                      Gallery
                    </a>
                  </li>
                </ul>
              </div>
              {/* cart 2 */}
              <div className="flex flex-col gap-5 mb-2">
                <h2 className="text-xl font-bold border-l-4 border-l-blue-400 pl-2">
                  LEGAL
                </h2>
                <ul className="footerList">
                  <li className="footerListItem">
                    <a href="#" className="w-full">
                      Terms and condition
                    </a>
                  </li>
                  <li className="footerListItem">
                    <a href="#" className="w-full">
                      Copyright information
                    </a>
                  </li>
                  <li className="footerListItem">
                    <a href="#" className="w-full">
                      Privacy policy
                    </a>
                  </li>
                </ul>
              </div>
              {/* cart 3 */}
              <div className="flex flex-col gap-5 mb-2">
                <h2 className="text-xl font-bold border-l-4 border-l-blue-400 pl-2">
                  COMPANY
                </h2>
                <ul className="footerList">
                  <li className="footerListItem">
                    <a href="#" className="w-full">
                      About us
                    </a>
                  </li>
                  <li className="footerListItem">
                    <a href="#" className="w-full">
                      Careers
                    </a>
                  </li>
                  <li className="footerListItem">
                    <a href="#" className="w-full">
                      Blogs
                    </a>
                  </li>
                  <li className="footerListItem">
                    <a href="#" className="w-full">
                      Custom support
                    </a>
                  </li>
                </ul>
              </div>
              {/* cart 4 */}
              <div className="flex flex-col gap-5 mb-2">
                <div className="flex flex-col items-start justify-start">
                  <h2 className="text-xl font-bold border-l-4 border-l-blue-400 pl-2 mb-5">
                    GAP APP
                  </h2>
                  <div className="">
                    <a href="https://play.google.com/">
                      <img
                        src={BlackPlayStore}
                        alt=""
                        className="cursor-pointer"
                      />
                    </a>
                    <a href="https://www.apple.com/">
                      <img
                        src={BlackAppStore}
                        alt=""
                        className="cursor-pointer"
                      />
                    </a>
                  </div>
                  <div>
                    <div className="flex  items-center justify-center gap-5">
                      <i className="ri-facebook-box-fill text-4xl cursor-pointer"></i>
                      <i className="ri-twitter-x-line text-4xl cursor-pointer"></i>
                      <i className="ri-instagram-line text-4xl cursor-pointer"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mx-6 w-full">
            <div className="flex flex-col items-center justify-center gap-3 mb-10">
              <h1 className="">Powered by</h1>
              <img
                src={FooterBigImage}
                alt=""
                className="w-[95%] lg:w-full h-auto"
              />
            </div>

            <div className="container flex flex-col xl:flex items-center justify-between text-center gap-4 ">
              <div>
                <p className="text-xs text-footerText">
                  &copy; 2025 DESIGN FOR EVERYONE, ALL RIGHTS RESERVED BY ICT
                  DIVISION
                </p>
              </div>
              <div className="text-xs text-footerText">
                <p>
                  Technical support by
                  <a
                    href="https://headless.ltd/"
                    className="underline underline-offset-2 hover:text-white duration-200"
                  >
                    Headless Technologies Ltd
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
