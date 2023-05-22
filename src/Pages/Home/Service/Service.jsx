import { useEffect, useState } from "react";
import ServiceData from "./ServiceData";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://re-zan-toys-server-side-re-zan.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="my_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-3 lg:p-0 gap-6"
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      {services.map((service) => (
        <ServiceData key={service._id} service={service}></ServiceData>
      ))}
    </div>
  );
};

export default Service;
