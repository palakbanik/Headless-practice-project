const InspirationSecImg = (props) => {
  return (
    <div>
      <div className=" bg-white shadow-lg  w-full h-auto transition-transform hover:-translate-y-3 duration-300 cursor-pointer">
        <img src={props.InspiImg} alt="" className="w-full h-auto  " />

        <div className="mx-3 py-3">
          <p className="font-bold text-sm mb-3">Inspiration</p>
          <h4 className="font-bold text-lg mb-3">
            Paige Deasley's Photos Capture the Joy of Outdoor Adventures
          </h4>
          <p className="text-textHeadingColor">4 min read</p>
        </div>
      </div>
    </div>
  );
};

export default InspirationSecImg;
