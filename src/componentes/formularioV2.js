import { useState } from "react";


//en vez de pasar el props lo desactruturo y paso el la funcion en este caso y siempre va con los corchetes de objeto
//ya que los props paso los objetos completos
export default function Fomularios({ setContactos }) {

    //guardamos el estado actual para utilizarlo cuando queremos hacer reset
    const inicialStateForm = { nombre: "", apellido: "", direccion: "", telefono: "", ciudad: "", codigo: "" };

    //creamos un único estado para todo el formulario, es un objeto con tantas propiedades como input tenga
    const [form, setForm] = useState(inicialStateForm);


    //actualizamos solo la propiedad relacionada con el input que no llega a traves del atributo id del form
    function inputNuevo(e) {

        const nuevaPropiedad = e.target.id;
        const nuevoValor = e.target.value;

        setForm({ ...form, [nuevaPropiedad]: nuevoValor })
    }
    //const inputNuevo = () => setForm({ ...form, [e.target.id]: e.target.value })


    //funcion del form
    function submit(e) {
        e.preventDefault();

        // la funcion de setContactos puede devolver el estado actual o hacer una funcion y devuelve 
        // lo que de esa funcion, en este caso el array y le sumamos el nuevo objeto form
        // se le puede pasar el estado actual o una funcion con el estado actual
        setContactos(actualContactos => [...actualContactos, form]);

        //Otra manera de traerme el array desde app es pasapor por props el array como lo hicimos en el componente agende de app
        // y aca lo hacemos mas sencillo
        // setContactos([...contactos, nuevoContacto]);

        setForm(inicialStateForm);


    }

    return (
        //la funcion del submit la ponemos en el formulario
        <form className="form-group" onSubmit={submit}>
            <input className="form-control mb-3" type="text" value={form.nombre} id="nombre" onChange={inputNuevo} placeholder="introduce el nombre" />
            <input className="form-control mb-3" type="text" value={form.apellido} id="apellido" onChange={inputNuevo} placeholder="introduce el apellido" />
            <input className="form-control mb-3" type="text" value={form.telefono} id="telefono" onChange={inputNuevo} placeholder="introduce el teléfono" />
            <input className="form-control mb-3" type="text" value={form.direccion} id="direccion" onChange={inputNuevo} placeholder="introduce la dirección" />
            <input className="form-control mb-3" type="text" value={form.ciudad} id="ciudad" onChange={inputNuevo} placeholder="introduce la ciudad" />
            <input className="form-control mb-3" type="text" value={form.codigo} id="codigo" onChange={inputNuevo} placeholder="introduce el código postal" />
            <input className="btn btn-success mb-3" type="submit" value="Registrar " />
        </form>

    )
}
