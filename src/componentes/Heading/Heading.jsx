const Heading = (props) => {
  return (
    <div className="my-20 my_container text-center">
      <h2 className=" font-swash text-[#a56f7c] font-bold text-6xl">
        {props.title}
      </h2>
      {/* <h2 className=" font-swash text-gray-800 font-bold text-6xl">
        {props.title}
      </h2> */}
      <p className="py-8 w-[750px] mx-auto text-lg font-medium text-gray-800">
        {props.description}
      </p>
    </div>
  );
};

export default Heading;
