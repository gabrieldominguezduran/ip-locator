function InformationContainer(props) {
  return (
    <section className={`info__${props.className} card`}>
      <h2 className="title">{props.title}</h2>
      {props.ip ? <p className="text">Your ip address: {props.ip}</p> : null}
    </section>
  );
}

export default InformationContainer;
