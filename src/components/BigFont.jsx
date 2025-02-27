const BigFont = (props) => {
  return (
    <>
      <h1
        className={`text-2xl md:text-4xl xl:text-5xl font-bold text-center
			 ${props.bgPurple ? " py-10 xl:pt-20 bg-purple-100" : ""} 
			 ${props.fontMove ? "container" : ""} ${props.contributor ? "container" : ""}`}
      >
        {props.text}
      </h1>
    </>
  );
};

export default BigFont;
