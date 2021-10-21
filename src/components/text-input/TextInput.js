import { TextField, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  numInput: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(1),
    },
  },
}));

const TextInput = ({ type, placeholder, variant, value, handleValueChange }) => {
  const classes = useStyles();
  return (
    <TextField
      type={type}
      variant={variant}
      className={classes.numInput}
      placeholder={placeholder}
      value={value}
      onChange={e => handleValueChange(e.target.value)}
    />
  );
};

export default TextInput;
