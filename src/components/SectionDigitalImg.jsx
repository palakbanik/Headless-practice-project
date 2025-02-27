const SectionDigitalImg = (props) => {
  return (
    <div>
      <div className="imageDiv relative overflow-hidden group">
        <img
          src={props.secImgSrc}
          className={`w-full h-auto cursor-pointer transition-transform duration-300 transform group-hover:scale-110 ${
            props.setSize ? "h-[353px] w-full" : ""
          }`}
          alt="star in the sky"
        />
        <i className="ri-vip-crown-fill text-green-500 bg-slate-900 w-8 h-8  flex items-center justify-center text-xl bg-opacity-90 rounded-sm absolute top-2 left-3 opacity-0 group-hover:opacity-80 duration-300 cursor-pointer"></i>
        <img
          className="bg-slate-900 w-8 bg-opacity-90 rounded-sm absolute top-2 right-3 opacity-0 group-hover:opacity-80 duration-300 cursor-pointer"
          src={props.secBookmarkSrc}
          alt="bookmark image"
        />
        <a href="#">
          <i className="ri-arrow-right-up-line border-2 border-black text-2xl rounded-full px-2 py-1 bg-slate-200 shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-80 duration-300 cursor-pointer"></i>
        </a>
        <p className=" absolute bottom-2 left-2 translate-x-0 bg-gray-400 bg-opacity-50 px-2 text-sm md:text-lg rounded-sm">
          Stars in The Sky...
        </p>
      </div>
    </div>
  );
};

export default SectionDigitalImg;
