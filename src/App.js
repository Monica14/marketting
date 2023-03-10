import React from "react";
import ScriptTag from "react-script-tag";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter,
  useHistory,
} from "react-router-dom";
import * as jQuery from "jquery";
window.$ = jQuery;
window.jQuery = window.$;
import Home from "./Home/Home";
import Blog from "./Blog/Blog";
import AboutUs from "./AboutUs/AboutUs";

function App() {
  const isAuth = localStorage.getItem("token");
  const history = useHistory();

  return (
    <>
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/blog" component={Blog}></Route>
            <Route exact path="/aboutUs" component={AboutUs}></Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
