const ServiceTile = (props) => {
  const service = props.service;

  return (
    <div className="bg-[#45260C]">
      <h1>{service.name}</h1>
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceTile;
