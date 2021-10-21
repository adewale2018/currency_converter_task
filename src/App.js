import { Container, Grid, makeStyles } from  '@material-ui/core';

import Navbar from "./pages/Navbar";
import Routes from './Routes';

const useStyles = makeStyles((theme) => ({
   container: {
    textAlign: 'center',
  }
}))



const App = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Container className={classes.container}>
        <Grid container>
          <Routes />
        </Grid>
      </Container>
    </>
  );
};

export default App;
