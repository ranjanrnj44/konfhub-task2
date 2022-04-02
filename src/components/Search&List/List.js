import React from "react";
import cardImage from "../../images/cards.png";
import "./List.css";

function ListComponent({ data, bool }) {
  console.log(bool);
  console.log(data);
  let temp = data.map((i) => i.is_virtual === true);
  console.log(temp);
  return (
    <>
      <h1>250+ Events</h1>
      <br />
      <article className="list-card-container">
        {data.map((item) =>
          item.is_virtual === bool ? (
            <section className="list-card" key={item.event_id}>
              <img src={cardImage} alt="cardImage" />
              <h4>{item.name}</h4>
              <section className="list-card-data-content">
                <p>Raddison Blue</p>
                <section>
                  <i class="fa-solid fa-circle-exclamation"></i>
                  <p>
                    {item.is_free ? "free" : "paid"} |{" "}
                    {item.is_virtual ? "online" : "offline"}
                  </p>
                </section>
              </section>
            </section>
          ) : (
            <></>
          )
        )}
      </article>
    </>
  );
}

export default ListComponent;
