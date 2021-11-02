import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from "react-router-dom";
import { privateRoute, publicRoute } from "../routes";
import { AUTH_ROUT, CHAT_ROUT } from "../utils/consts";

const AppRouter = () => {
  const isLogin = useSelector(({isLogin}) => isLogin);
  
  return isLogin ? (
    <Switch>
      {privateRoute.map(({ path, Component }) => (
        <Route path={path} component={Component} exact={true} key={path} />
      ))}
      <Redirect to={CHAT_ROUT} />
    </Switch>
  ) : (
    <Switch>
      {publicRoute.map(({ path, Component }) => (
        <Route path={path} component={Component} exact={true} key={path} />
      ))}
      <Redirect to={AUTH_ROUT} />
    </Switch>
  );
};

export default AppRouter;
