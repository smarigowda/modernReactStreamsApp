import React from "react";

import { Button } from "../../styled/button";
import history from "../../history";

const onClickHandler = () => {
  history.push("/new");
};

export default () => {
  return (
    <div>
      <Button onClick={onClickHandler}>Create Stream</Button>
    </div>
  );
};
