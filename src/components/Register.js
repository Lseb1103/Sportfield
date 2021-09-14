import React from "react";
import "../styles/App.css";
/*import React, { useState } from "react";*/
import { Form, Input, Row, Col } from "antd";
/*import "../moment/localet/es";*/
/*import locale from "antd/es/date-picker/locale/es_ES";
import { DatePicker } from "antd/es";*/
/*import { Image } from "antd";*/
import {useHistory } from "react-router-dom";
import "../styles/register.css";

import { GreenButton } from "./GreenButton";

const { Item } = Form;

function Register() {
  const formSuccess = (datos) => {
    console.log("Form submitted successfully: ", datos);
  };
  const formFailed = (error) => {
    console.log("Error: ", error);
  };
  const history = useHistory();
  const handleProfile =  () => {
    history.push("/perfil");
  };
  return (
    <div>

      <div className="Container1">
        <Row>
          <Col xs={1} sm={2} md={6} lg={7} />
          <Col xs={22} sm={20} md={12} lg={10}>
            <div className="title">
              <h1>Registro de nuevo usuario</h1>
            </div>

            <Form
              name={"form"}
              initialValues={{
                remember: true,
              }}
              onFinish={formSuccess}
              onFinishFailed={formFailed}
            >
            {/*<Item*/}
            {/*    className="item1"*/}
            {/*    label="Usuario"*/}
            {/*    name="Usuario"*/}
            {/*    rules={[*/}
            {/*      { required: true, message: "por favor ingresa tu Usuario" },*/}
            {/*    ]}*/}
            {/*  >*/}
            {/*    <Input />*/}
            {/*  </Item>*/}

              <Item
                label="Nombre"
                name="Nombre"
                rules={[
                  { required: true, message: "por favor ingresa tu Nombre" },
                ]}
              >
                <Input />
              </Item>

              <Item
                label="Apellido"
                name="Apellido"
                rules={[
                  { required: true, message: "por favor ingresa tu Apellido" },
                ]}
              >
                <Input />
              </Item>

              <Item
                label="Correo Electronico"
                name="CorreoElectronico"
                rules={[
                  {
                    required: true,
                    message: "por favor ingresa tu Correo Electronico",
                  },
                ]}
              >
                <Input />
              </Item>

              <Item
                label="Contraseña"
                name="Contrasena"
                rules={[
                  {
                    required: true,
                    message: "por favor ingresa tu Correo Contraseña",
                  },
                ]}
              >
                <Input />
              </Item>

              <Item
                label="Confirmar Contraseña"
                name="ConfirmarContrasena"
                rules={[
                  {
                    required: true,
                    message: "por favor reescribe tu contraseña",
                  },
                ]}
              >
                <Input />
              </Item>

              <Item
                label="Numero de lote"
                name="NumLote"
                rules={[
                  {
                    required: true,
                    message: "por favor ingresa tu Numero de lote",
                  },
                ]}
              >
                <Input />
              </Item>

              <Item>
                <GreenButton
                  button_name="Registrar"
                  button_func={handleProfile}
                />
              </Item>
            </Form>
          </Col>

          <Col xs={1} sm={2} md={6} lg={7} />
        </Row>
      </div>
    </div>
  );
}
export default Register;
