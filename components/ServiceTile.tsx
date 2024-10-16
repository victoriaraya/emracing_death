const ServiceTile = (props) => {
  const service = props.service;

  return (
    <div>
      <h1 className="text-3xl pb-4">{service.name}</h1>
      <p className="text-xl pb-20">{service.description}</p>
    </div>
  );
};

export default ServiceTile;
