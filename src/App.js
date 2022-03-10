import './App.css';
import Agenda from './componentes/agenda';
import Formulario from './componentes/fomularios';
import { useState } from "react"; //importamos useState

function App() {

  const initialContacto = [
    { nombre: "Sebastián", apellido: "Fiorini", direccion: "calle 22 2B", ciudad: "Malaga", codigo: 29007, telefono: "12779468" },
    { nombre: "Mariela", apellido: "Matias", direccion: "Blanch 22 2B", ciudad: "Torremolinos", codigo: 29620, telefono: "12779468" },
    { nombre: "Maria", apellido: "perez", direccion: "Av Benalmadena 4B", ciudad: "Benalmadena", codigo: 29560, telefono: "12779468" },
    { nombre: "Maria", apellido: "Fiori", direccion: "Av Málaga 4C", ciudad: "Benalmadena", codigo: 29560, telefono: "12779468" }

  ];

  //useState recibe por argumento en el estado inicial la variable que es un array => initialContacto
  //este contactos no se puede modificar sino es por su funcion setContactos. SE puede copiar y ahi si se hace push
  const [contactos, setContactos] = useState(initialContacto);
  //contactos en el estado es la variable de acceso al estado de array.

  // const [contactos, setContactos] = useState([])//esto seria un array vacio, para empezar hay qque poner lo que fuese pero vacio, "" {} o 0


  return (
    <div className="container">
      <h3 className="my-4">Lista de Contacto</h3>
      {/* al ser contacto un array accedemos a todo el array en la variable como se muestra */}
      <Agenda mostrarContacto={contactos} setContactos={setContactos} />

      <h3 className="my-4">Nuevo Contacto</h3>
      {/* //pasamos por props la funcion para poder modificarlo, se lo envio y entonces si lo puedo modificar desde el archivo formulario */}
      <Formulario setContactos={setContactos} />
    </div>
  );
}

export default App;
