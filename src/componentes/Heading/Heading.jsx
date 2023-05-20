const Heading = (props) => {
  return (
    <div className="my-20 my_container text-center p-2">
      <h2 className=" font-swash text-[#a56f7c]  text-6xl text_shadows">
        {props.title}
      </h2>
      {/* <h2 className=" font-swash text-gray-800 font-bold text-6xl">
        {props.title}
      </h2> */}
      <p className="pt-8 w-[300px] md:w-[500px] lg:w-[750px] mx-auto text-lg font-medium text-gray-800">
        {props.description}
      </p>
    </div>
  );
};

export default Heading;
