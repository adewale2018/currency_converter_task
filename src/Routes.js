import { Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import NotFound from "./pages/NotFound";

const PageOne = () => <h2>Other Page</h2>;

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/other_page" component={PageOne} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
