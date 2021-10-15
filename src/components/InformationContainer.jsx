import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function InformationContainer(props) {
  const { currentUser } = useContext(UserContext);
  let userIp = currentUser && currentUser.ip ? currentUser.ip : "0.0.0.0";
  return (
    <section className={`info__${props.className} card`}>
      <h2 className="title">{props.title}</h2>
      {currentUser ? <p>Your ip address: {userIp}</p> : null}
    </section>
  );
}

export default InformationContainer;
