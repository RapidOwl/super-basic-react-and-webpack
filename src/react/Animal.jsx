import React from "react";

export default props =>
  <div>
    <h1>
      {props.animal}
    </h1>
    {props.showDetail && <p>Here's some detail about animals</p>}
  </div>