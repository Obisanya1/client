import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "./../assets/wrappers/ErrorPage";
import image from "./../assets/images/not-found.svg";

function Error() {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={image} alt="not found"></img>
        <h3> Ohh! Page not found</h3>
        <Link to="/"> back home</Link>
      </div>
    </Wrapper>
  );
}

export default Error;
