import { useEffect, useState } from "react";
import ServiceData from "./ServiceData";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-3 lg:p-0 gap-6">
      {services.map((service) => (
        <ServiceData key={service._id} service={service}></ServiceData>
      ))}
    </div>
  );
};

export default Service;
