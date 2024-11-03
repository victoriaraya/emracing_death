import ServiceTile from "@/components/ServiceTile";
import { ServicesList } from "@/components/ServicesDoc";

const Services = () => {
  return (
    <div className="flex flex-col gap-5 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#d2b48c_100%)] text-[#4F7641] h-full pb-4 px-20">
      <h1 className="text-7xl text-center py-8">Services</h1>
      <div className="grid grid-cols-3 gap-8 pb-14">
        {ServicesList.map((service, idx) => (
          <ServiceTile service={service} key={idx} />
        ))}
      </div>
      <h2 className="text-[#4F7641] text-center text-3xl pb-20">
        <a href="mailto:meaningfulendcare@gmail.com" className="relative group">
          Contact us to schedule a free consultation
          <span className="absolute left-1/2 bottom-[-5px] w-0 h-[2px] bg-[#4F7641] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </a>
      </h2>
    </div>
  );
};

export default Services;
