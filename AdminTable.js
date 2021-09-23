import "../styles/App.css";
import "../styles/register.css";
import "../styles/adminTable.css";
//import { Table, Space, Button } from "antd";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { db } from "../Firebase";
//const { Column, ColumnGroup } = Table;
//import { HeaderComp } from "./HeaderComp";
//const [dataform, setDataform] = useState([]);
function AdminTable() {
  const [dataa, setDat] = useState([]);
  useEffect(() => {
    console.log("useefect data");
    const getDta = async () => {
      const setdata = [];
      await db.collection("Users").onSnapshot("value", (snapshot) => {
        console.log("datos", snapshot);
        snapshot.forEach((childSnapshot) => {
          const data = childSnapshot.data();
          setdata.push(data);
        });
        setDat(setdata);
      });
    };
    getDta();
  }, []);

  /*db.collection("Users")
    .doc("")
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
*/
  useEffect(() => {
    console.log("datos de la base", dataa);
  }, [dataa]);

  /*db.collection("Users")
    .doc("")
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
  /*const HandleEliminar = (registr) => [];
  const data = [


await deleteDoc(doc(db, "cities", "DC"));

    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      hour: 10,
      date: "Jueves 15 ",
    },
    {
      key: "2",
      firstName: "Jim",
      lastName: "Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      firstName: "Joe",
      lastName: "Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  /*useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setDataform(Object.values(data));
    };
    getData();
  }, []);

   */
  return (
    <div
    /*className="app"
      style={{
        background: "3A438B",
        color: "white",
        position: "relative",
        width: 930,
        left: 400,
        top: -310,
        borderRadius: 20,
      }}
      
       */
    >
      <div className="containerTable">
        <table className="containerTablein">
          <thead className="containerheadtable">
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Cancha</th>
            </tr>
          </thead>
          <tbody>
            {dataa.map((item, key) => (
              <tr key={key}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.date}</td>
                <td>{item.userName}</td>
                <td>
                  {" "}
                  <Button className="ub-button">Ver ubicacion</Button>
                </td>
                <td>
                  <Button className="button-edit">Editar</Button>
                </td>
                <td>
                  <Button className="purple-button">Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default AdminTable;
/*const [dataform, setDataform] = useState([]);
 const columns = [
   {
     title: "Usuario",
     dataindex: "usuario",
     key: "usuario",
   },
   {
     title: "Nombre",
     dataindex: "nombre",
     key: "nombre",
   },
   {
     title: "Apellido",
     dataindex: "apellido",
     key: "apellido",
   },
   {
     title: "Acciones",
     dataindex: "acciones",
     key: "acciones",
     render: (fila) => (
       <>
         <Button type="primary">Editar</Button>{" "}
         <Button type="primary" danger>
           Eliminar
         </Button>
       </>
     ),
   },
];
*/
