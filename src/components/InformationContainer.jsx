function InformationContainer(props) {
  const { ip, city, country_name } = props.search ? props.search : "";
  return (
    <section className={`info__${props.className} card`}>
      <h2 className="title">{props.title}</h2>
      {ip ? (
        <div>
          <p className="text">
            IP: <span className="text__span ip">{ip}</span>
          </p>
          <p className="text">
            City: <span className="text__span city">{city}</span>
          </p>
          <p className="text">
            Country: <span className="text__span country">{country_name}</span>
          </p>
        </div>
      ) : null}
    </section>
  );
}

export default InformationContainer;
