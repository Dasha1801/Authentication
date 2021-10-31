import { Route, Switch } from "react-router-dom";
import { privateRoute, publicRoute } from "../routes";

const AppRouter = () => {
  const user = false;
  return user ? (
    <Switch>
      {privateRoute.map(({ path, Component }) => (
        <Route path={path} exact={true} component={Component} key={path} />
      ))}
    </Switch>
  ) : (
    <Switch>
      {publicRoute.map(({ path, Component }) => (
        <Route path={path} component={Component} exact={true} key={path} />
      ))}
    </Switch>
  );
};

export default AppRouter;
