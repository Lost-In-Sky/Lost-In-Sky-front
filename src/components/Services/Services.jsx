import React, { useState, useEffect } from "react";
import { ServicesWrapper } from "../Services/Services.style";
import api from "../../helpers/api";
import ServiceCard from "../ServiceCard/ServiceCard";
import Loading from "../Loading";

const Services = () => {
  const [servicees, setServices] = useState([]);
  useEffect(() => {
    (async () => {
      const { data: serviceData } = await api("get", "service");
      setServices(serviceData);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ServicesWrapper>
      {servicees && servicees.length > 0 ? (
        servicees.map((service) => (
          <ServiceCard service={service} key={service.id} />
        ))
      ) : (
        <Loading />
      )}
    </ServicesWrapper>
  );
};

export default Services;
