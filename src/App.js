import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PrivateRoute } from "./components/PrivateRoute";
import Login from "./screens/Login";
import Homepage from "./screens/Homepage";
import routes from "./routes.json";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "./store/users";

const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    if (!user) {
      dispatch(getCurrentUser());
    }
  }, []);
  const privateRoutes = [
    <PrivateRoute
      key="Homepage"
      exact
      path={routes.HOMEPAGE}
      component={Homepage}
    />,
  ];
  const publicRoutes = [
    <Route key="Login" exact path={routes.LOGIN} component={Login} />,
  ];
  return (
    <Router>
      <Switch>
        {publicRoutes}
        {privateRoutes}
      </Switch>
      <ToastContainer />
    </Router>
  );
};

export default App;
