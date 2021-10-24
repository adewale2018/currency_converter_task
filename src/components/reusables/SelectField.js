import { MenuItem, TextField } from "@material-ui/core";

import React from "react";

const SelectWrapper = ({ options, currency, onCurrencyChange }) => {
  const handleChange = (evt) => {
    const { value } = evt.target;
    onCurrencyChange(value);
  };

  return (
    <TextField select onChange={handleChange} value={currency}>
      {options &&
        options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
    </TextField>
  );
};

export default SelectWrapper;
