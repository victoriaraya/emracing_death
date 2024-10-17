const ServiceTile = (props) => {
  const service = props.service;

  return (
    <div>
      <h1 className="text-3xl pb-4">{service.name}</h1>
      <ul className="text-xl list-disc pb-14 pl-5">
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
