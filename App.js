//import "../styles/App.css";
//import Log from "./Log.js";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Register from "./Register";
//import AboutFigma from "./AboutFigma";
import AdminMenu from "./AdminMenu";
//import AdminTable from "./AdminTable";
//import Notifyadmin from "./Notifyadmin";
//import "../styles/GreenButton.css";

function App() {
  return (
    <AdminMenu />
    /*<Router>
      <div>
        <Switch>
          <Route path="/registro">
            <AdminMenu />
          </Route>
          <Route path="/admintable">
            <AdminTable />
          </Route>
          <Route path="/">
            <AdminTable />
          </Route>
        </Switch>
      </div>
    </Router>*/
  );
}

export default App;
