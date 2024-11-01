import Image from "next/image";

const ServiceTile = (props) => {
  const service = props.service;

  return (
    <div className="bg-[#F9F4F0] border-2 border-[#4F7641] p-3 rounded-md flex flex-col items-center">
      <Image
        src={`/images/${service.imageName}`}
        alt={service.name}
        width={350}
        height={350}
        quality={100}
        className="rounded-sm pb-5"
      />
      <h1 className="text-3xl pb-4 text-center">{service.name}</h1>
      <ul className="text-xl list-disc pb-4 pl-5">
        {service.description.map((item, idx) => (
          <li key={idx} className="pb-5">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceTile;
