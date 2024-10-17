import ServiceTile from "@/components/ServiceTile";
import { ServicesList } from "@/components/ServicesDoc";

const Services = () => {
  return (
    <div className="flex flex-col gap-5 bg-[#CDBA9D] text-[#4F7641] h-full pb-4 px-20">
      <h1 className="text-6xl text-center py-4">Services</h1>
      {ServicesList.map((service, idx) => (
        <ServiceTile service={service} key={idx} />
      ))}
    </div>
  );
};

export default Services;
