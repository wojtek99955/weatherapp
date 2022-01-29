import React from "react";
import { Error } from "./ErrorStyles";

function ErrorMessage({ fetchError }) {
  return (
    <Error>
      <p>{fetchError}</p>
    </Error>
  );
}

export default ErrorMessage;
