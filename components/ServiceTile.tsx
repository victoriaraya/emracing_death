const ServiceTile = (props) => {
  const service = props.service;

  return (
    <div className="bg-slate-200">
      <h1>{service.name}</h1>
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceTile;
