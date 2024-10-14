import ServiceTile from "@/components/ServiceTile";
import { ServicesList } from "@/components/ServicesDoc";

const Services = () => {
  return (
    <div className="flex flex-col gap-5 bg-[#4F7641] text-[#CDBA9D] h-full px-6 pb-4">
      <h1 className="text-5xl text-center py-4">Services</h1>
      {ServicesList.map((service, idx) => (
        <ServiceTile service={service} key={idx} />
      ))}
    </div>
  );
};

export default Services;
