import React, { useContext } from "react";
import { RoomContext } from "../../Context/RoomsContext";
import { ServicesWrapper } from "../Services/Services.style";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const { service } = useContext(RoomContext);
  console.log(service);
  return (
    <ServicesWrapper>
      {service.length > 0
        ? service.map((servicee) => <ServiceCard name={servicee.type} key={servicee.id} />)
        : "nothing to show"}
        
    </ServicesWrapper>
  );
};

export default Services;
