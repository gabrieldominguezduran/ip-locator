function InformationContainer(props) {
  return (
    <section className={`info__${props.className} card`}>
      <h2 className="title">{props.title}</h2>
    </section>
  );
}

export default InformationContainer;
