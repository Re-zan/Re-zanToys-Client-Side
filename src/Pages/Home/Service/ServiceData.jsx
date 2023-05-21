const ServiceData = ({ service }) => {
  const { service_name, img_url, description } = service;
  return (
    <div className="card bg-gray-200  transition duration-500 transform ease-in-out hover:-translate-y-4 hover:shadow-2xl ">
      <figure>
        <img
          src={img_url}
          alt={service_name}
          className=" h-60 w-full img_hover "
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#a56f7c] font-swash text-3xl my-2">
          {service_name}
        </h2>
        <p className="text-gray-800">{description}</p>
      </div>
    </div>
  );
};

export default ServiceData;
