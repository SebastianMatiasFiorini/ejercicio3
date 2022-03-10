import { useState } from "react";


//en vez de pasar el props lo desactruturo y paso el la funcion en este caso y siempre va con los corchetes de objeto
//ya que los props pasan los objetos completos
export default function Fomularios({ setContactos }) {


    //aca creamos un estado para cada input y luego la funcion para cada estado,     
    const [nombre, setNombre] = useState(""); //siempre se le da un estado inicial 
    const [apellido, setApelllido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [direccion, setDireccion] = useState("");
    const [codigo, setCodigo] = useState("");

    //funcion de los input //cuando cojemos el value siempre se hace STING , aclo porque en el array es numbers
    function inputNombre(e) {
        setNombre(e.target.value);
    };
    function inputApellido(e) {
        setApelllido(e.target.value);
    };
    function inputTelefono(e) {
        setTelefono(e.target.value);
    };
    function inputDireccion(e) {
        setCiudad(e.target.value);
    };
    function inputCiudad(e) {
        setDireccion(e.target.value);
    };
    function inputCodigo(e) {
        setCodigo(e.target.value);
    };



    //funcion del form
    function submit(e) {
        e.preventDefault();

        // const nuevoContacto = { //otra opcion a la linea (54)
        //     nombre: form.nombre,
        //     apellido: form.apellido,
        //     telefono: form.telefono,
        //     direccion: form.direccion,
        //     ciudad: form.ciudad,
        //     codigo: form.codigo
        // };

        //asi podemos crear el nuevo objeto si llamamos a la propiedad de useState de arriba con el mismo nombre
        // es decir la propiedad va a tener el mismo nombre que el valor
        const nuevoContacto = { nombre, apellido, telefono, direccion, ciudad, codigo };

        // la funcion de setContactos puede devolver el estado actual o hacer una funcion y devuelve en este caso el array y le sumamos el nuevo objeto
        // se le puede pasar el estado actual o una funcion con el estado actual
        setContactos(actualContactos => [...actualContactos, nuevoContacto]);

        //Otra manera de traerme el array desde app es pasapor por props el array como lo hicimos en el componente agende de app
        // y aca lo hacemos mas sencillo
        // setContactos([...contactos, nuevoContacto]);

        setNombre(""); //reseteamos los input con el nombre que lo llamamos arriba en la funcion
        setApelllido("");
        setTelefono("");
        setDireccion("");
        setCiudad("");
        setCodigo("");
    }

    return (
        //la funcion del submit la ponemos en el formulario
        <form className="form-group" onSubmit={submit}>
            <input className="form-control mb-3" type="text" value={nombre} id="nombre" onChange={inputNombre} placeholder="introduce el nombre" />
            <input className="form-control mb-3" type="text" value={apellido} id="apellido" onChange={inputApellido} placeholder="introduce el apellido" />
            <input className="form-control mb-3" type="text" value={telefono} id="telefono" onChange={inputTelefono} placeholder="introduce el teléfono" />
            <input className="form-control mb-3" type="text" value={direccion} id="direccion" onChange={inputDireccion} placeholder="introduce la dirección" />
            <input className="form-control mb-3" type="text" value={ciudad} id="ciudad" onChange={inputCiudad} placeholder="introduce la ciudad" />
            <input className="form-control mb-3" type="text" value={codigo} id="codigo" onChange={inputCodigo} placeholder="introduce el código postal" />
            <input className="btn btn-success mb-3" type="submit" value="Registrar " />
        </form>

    )
}
