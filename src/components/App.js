//import "../styles/App.css";
import Log from "./Log.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Register";
//import Register from "./Register";
//import AboutFigma from "./AboutFigma";
//import AdminMenu from "./AdminMenu";
//import AdminTable from "./AdminTable";
//import "../styles/GreenButton.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/registro">
            <Register />
          </Route>
          <Route path="/">
            <Log />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
