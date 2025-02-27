const FirstSectionImage = (props) => {
  return (
    <>
      <a href="#">
        <img
          src={props.imageSrc}
          alt="discover image"
          className=" sm:discoverImg cursor-pointer  w-full h-auto "
        />
      </a>
    </>
  );
};

export default FirstSectionImage;
