import React from "react";
import coverLogo from "../../images/logo.png";
import "./Cover.css";

function CoverComponent() {
  return (
    <article className="cover-container">
      <section className="cover-para">
        <h1>Events</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ad
          molestiae similique tempora aliquid qui, saepe ipsa rem sunt tenetur
          perferendis dolorum expedita culpa sint natus placeat delectus, veniam
          doloribus totam. Dolore temporibus corporis, dignissimos quia sit eum,
          repellat possimus voluptatem, aut quo officiis quas eligendi. Aperiam
          ducimus quae similique voluptatibus inventore magnam voluptatem dolore
          officia exercitationem eveniet incidunt quos quia vel recusandae
          quaerat ipsum, fugiat aspernatur veniam, corporis iusto!{" "}
        </p>
      </section>
      <section className="cover-content">
        <img src={coverLogo} alt="company-logo" />
      </section>
    </article>
  );
}

export default CoverComponent;
