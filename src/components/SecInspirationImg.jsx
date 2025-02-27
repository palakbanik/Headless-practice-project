const SecInspirationImg = (props) => {
  return (
    <>
      <div className="px-5 flex flex-col gap-4">
        <div className="relative overflow-hidden ">
          <p className="text-xs inline-block bg-black text-white px-2 py-1 rounded-sm bg-opacity-80 absolute top-4 ">
            60 Assets
          </p>
          <img
            src={props.img1}
            alt="aesthetic image"
            className=" transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer w-full h-auto"
          />
        </div>

        <div className="flex gap-3 mx-auto relative overflow-hidden group">
          <img
            src={props.img2}
            alt="aesthetic image"
            className="xs:w-[140px] xs:h-auto sm:w-[164px] sm:h-auto md:w-[205px] md:h-auto transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
          />
          <img
            src={props.img3}
            alt="aesthetic image"
            className="xs:w-[140px] xs:h-auto sm:w-[164px] sm:h-auto md:w-[205px] md:h-auto transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
          />
        </div>
        <h3 className="font-bold text-xl pb-10"> {props.text} </h3>
      </div>
    </>
  );
};

export default SecInspirationImg;
