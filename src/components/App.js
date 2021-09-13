import sportFieldLogo from '../images/sportFieldLogo.jpg';
import '../styles/App.css';
import React from "react"
import { Layout } from 'antd';
import MainMenu from "./MainMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./Services";
import Course from "./Course";
import Carouselinfo from "./Carouselinfo";


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
            <div className="imagesInfo">

                <Carouselinfo />
            </div>
<div className="services">
    <h2>SERVICIOS</h2>
<Services />
    <div className="curses">
        <h2>CURSOS DISPONIBLES</h2>
        <Course />
    </div>

</div>
            <Switch>
                 <Route path="/acerca-de">

                </Route>
                <Route path="/tareas">

                </Route>
                <Route path="/netflix">

                </Route>
                <Route path="/">

                </Route>
            </Switch>
        </Content>
        <Footer className="footer">Footer</Footer>
      </Layout>
      </Router>
  );
}

export default App;
