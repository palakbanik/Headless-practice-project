export default function TransparentBtn(props) {
  return (
    <>
      <button
        className={`transparentBtn md:hidden ${
          props.increaseBtn ? "mt-10" : ""
        } `}
      >
        {props.text}
      </button>
    </>
  );
}
