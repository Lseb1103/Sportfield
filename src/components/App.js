import sportFieldLogo from '../images/sportFieldLogo.jpg';
import '../styles/App.css';
import React from "react"
import { Layout } from 'antd';
import MainMenu from "./MainMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutFigma from "./AboutFigma";
import Log from "./Log";
import Register from "./Register";
import HomePage from "./HomePage";


const { Header, Footer, Content } = Layout;

function App() {
  return (
      <Router>
      <Layout>
        <Header className="main-header">
            <div>
                <img src={sportFieldLogo} alt="SportField"/>
            </div>

      <MainMenu />
        </Header>
        <Content className="main-content">
            <Switch>
                <Route path="/acerca-de">
                    <AboutFigma />
                </Route>
                <Route path="/inicio-sesion">
                    <Log />
                </Route>
                <Route path="/registrarse">
                    <Register />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>


        </Content>
        <Footer className="footer">Footer</Footer>
      </Layout>
      </Router>
  );
}

export default App;
