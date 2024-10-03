import ServiceTile from "@/components/ServiceTile";
import { ServicesList } from "@/components/ServicesDoc";

const Services = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1>Services</h1>
      {ServicesList.map((service, idx) => (
        <ServiceTile service={service} key={idx} />
      ))}
    </div>
  );
};

export default Services;
