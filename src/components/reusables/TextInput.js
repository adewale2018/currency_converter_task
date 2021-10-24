import React from "react";

import {TextField} from "@material-ui/core";


const TextFieldWrapper = ({ amount, onAmountChange }) => {
  return (
    <TextField
      value={amount}
      onChange={(e) => onAmountChange(e.target.value)}
    />
  );
};

export default TextFieldWrapper;
