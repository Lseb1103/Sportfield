import "../styles/AboutFigma.css";
import { Card, Col, Row } from "antd";
import { HeaderComp } from "./HeaderComp";
function AboutFigma() {
  /*<heder className="heder"></heder>*/
  return (
    <div>
      <HeaderComp />
      <br />
      <div className="containercard">
        <Row gutter={16}>
          <Col span={8}>
            <Card
              style={{ background: "#4D59BB" }}
              title="Objetivo"
              bordered="20"
            >
              Que la comunidad realize deporte
            </Card>
          </Col>
        </Row>
        <br />
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
        <br />
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

export default AboutFigma;
