import React from "react";
import Form from "../components/Form";

const Main = () => {
  return (
    <div className="main-container">
      <div className="left-side">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="right-side">
        <div className="free-trial">
          <p>
            <span>Try it free 7 day </span>then $20/mo. thereafter
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Main;
