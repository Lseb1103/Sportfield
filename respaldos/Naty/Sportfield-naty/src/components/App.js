//import sportFieldLogo from '../images/sportFieldLogo.jpg';
import '../styles/App.css';
import React from "react"
//import MainMenu from "./MainMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import { ProfilePage } from "../pages/ProfilePage";
import { TurnsPage } from "../pages/TurnsPage";
import CoursesOfferedPage from "../pages/CoursesOfferedPage";
import {Layout} from "antd";
import MainFooter from "./MainFooter";
import TurnsAdmin from "./TurnsAdmin";
import Comments from "./Comments";


const {  Footer, Content } = Layout;

function App() {
    return (
        //   <Router>
        //   <Layout>
        //     <Header className="main-header">
        //         <div>
        //             <img src={sportFieldLogo} alt="SportField"/>
        //         </div>

        //   <MainMenu />
        //     </Header>
        //     <Content className="main-content">
        //         <Switch>
        //             <Route path="/acerca-de">
        //                 <AboutPage />
        //             </Route>
        //             <Route path="/inicio-sesion">
        //                 <LoginPage />
        //             </Route>
        //             <Route path="/registrarse">
        //                 <RegisterPage />
        //             </Route>
        //             <Route path="/perfil">
        //                 <ProfilePage />
        //             </Route>
        //             <Route path="/agendar-canchas">
        //                 <TurnsPage />
        //             </Route>

        //             <Route path="/">
        //                 <HomePage />
        //             </Route>
        //         </Switch>


        //     </Content>
        //     <Footer className="footer">Footer</Footer>
        //   </Layout>
        //   </Router>
        <Router>
            <Layout className="main-content">
                <Content >
                    <Switch>
                        <Route path="/acerca-de">
                            <AboutPage />
                        </Route>
                        <Route path="/inicio-sesion">
                            <LoginPage />
                        </Route>
                        <Route path="/registrarse">
                            <RegisterPage />
                        </Route>
                        <Route path="/perfil">
                            <ProfilePage />
                        </Route>
                        <Route path="/agendar-canchas">
                            <TurnsPage />
                        </Route>
                        <Route path="/cursos-ofertados">
                            <CoursesOfferedPage />
                        </Route>
                        <Route path="/turnos">
                            <TurnsAdmin />
                        </Route>
                        <Route path="/comentarios">
                            <Comments />
                        </Route>
                        <Route path="/">
                            <HomePage />
                        </Route>

                    </Switch>

                </Content>
                <Footer><MainFooter /></Footer>
            </Layout>

        </Router>
    );
}

export default App;
