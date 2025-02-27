const ContributorSecImg = (props) => {
  return (
    <>
      <div className="relative overflow-hidden group">
        <img
          src={props.assets}
          alt=""
          className="w-full h-auto transition-transform hover:scale-110 duration-300"
        />
        <a href="#">
          <i className="ri-arrow-right-up-line border-2 border-black text-2xl rounded-full px-2 py-1 bg-slate-200 shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-80 duration-300  "></i>
        </a>

        <div className="flex gap-3 items-center absolute bottom-2 left-3">
          <img
            src={props.contri}
            alt="contributor"
            className=" opacity-0 group-hover:opacity-80 duration-300 cursor-pointer"
          />
          <a
            href="#"
            className="text-white text-sm font-semibold opacity-0 group-hover:opacity-80 duration-300"
          >
            Rased Ahmed
          </a>
        </div>
      </div>
    </>
  );
};

export default ContributorSecImg;
