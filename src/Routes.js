import { Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import SecondPage from "./pages/SecondPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/other_page" component={SecondPage} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
