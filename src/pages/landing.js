import React from "react";
import Logo from "./../assets/images/logo.svg";
import main from "./../assets/images/main.svg";

function Landing() {
  return (
    <main>
      <nav>
        <img src={Logo} alt="Jobify" className="logo"></img>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className="btn btn-hero"></button>
        </div>
      </div>
    </main>
  );
}

export default Landing;
