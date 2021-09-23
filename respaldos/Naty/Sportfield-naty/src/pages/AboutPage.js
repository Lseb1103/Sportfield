import React from "react"
import "../styles/AboutPage.css";
import { Card, Col, Row } from "antd";
import sportFieldLogo from "../images/sportFieldLogo.jpg";

function AboutPage() {
  /*<heder className="heder"></heder>*/
  return (
    <div className="imagenFondo">

      <div className="headerAboutPage">
        <Row>
          <Col span={12}>
            <img src={sportFieldLogo} alt="SportField" />
          </Col>
          <Col span={12}>
            <h2><a>
              Regresar
            </a>
            </h2>
          </Col>
        </Row>

      </div>
      <div className="containercard">
        <Row gutter={16}>
          <Col span={8}>
            <Card className="objetivoCard"
              style={{ background: "#4D59BB" }}
              title="Objetivo"

            >
             Insentivar el deporte y la actividad fisica en la comunidad con nuestro sistema de agendamiento de canchas deportivas e inscripcion en nuestroa cursos dirigido para el publico en general.
            </Card>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={8}>
            <Card
              style={{ background: "#4D59BB" }}
              title="Misión"
              bordered={false}
            >
              Promover el deporte como herramienta para la educación en valores
              y la salud.
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Card
              style={{ background: "#4D59BB" }}
              title="Visión"
              bordered={false}
            >
              Ser el principal agente internacional promotor del deporte
              inclusivo – educativo y de hábitos de vida saludable en el
              conjunto.
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AboutPage;
