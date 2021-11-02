import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logIn } from "../../redux/action";
import { AUTH_ROUT } from "../../utils/consts";

const ButtonExit = () => {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logIn(false));
  };

  return (
    <NavLink to={AUTH_ROUT}>
      <Button variant="danger" onClick={logOut}>
        Exit
      </Button>
    </NavLink>
  );
};

export default ButtonExit;
