
//desectructuro y en vez de pasar un props paso un variable que es un array. 
//Esa variable es la que pusimos en App en el componente agenda. siempre va entre {mostrarContacto}

export default function Agenda({ mostrarContacto, setContactos }) {

    //funcion para eliminar un contacto
    //paso la funcion por props y aca dentro la llamo ya que esa funcion es la unica que podemos acceder 
    //para modificar  el array de agenda (setContactos)
    function eliminarContacto(e) {
        setContactos(mostrarContacto.filter(contacto => contacto.telefono !== e.target.id));
        //setContactos en este caso devuelve un valor que es el que da filter
    }


    return (
        <div className="row">
            {/* {JSON.stringify(mostrarContacto)} //Para comprabar que llegan los datos bien*/}
            {/* aca recorremos el array como explique arriba con map */}
            {mostrarContacto.map((item, index) => {
                // el map tienen dos argumentos, el array y el indece Nª para este poder mostrarlo abajo


                // estos parentesis se ponen para empezar el codigo en la linea de abajo, ya que return 
                //tienen que tener algo al lado sino da error
                return (
                    <ul className="list-group mb-3 col-12 col-sm-6 col-xl-3" key={item.telefono + item.nombre} >
                        <li className="list-group-item active" >Contacto {index + 1}</li>
                        <li className="list-group-item">{item.nombre}</li>
                        <li className="list-group-item">{item.apellido}</li>
                        <li className="list-group-item">{item.telefono}</li>
                        <li className="list-group-item">{item.direccion}, {item.ciudad}, {item.codigo}</li>
                        <li className="list-group-item"><button className="btn btn-danger" id={item.telefono} onClick={eliminarContacto}>Eliminar</button></li>
                    </ul>
                );
            })}


        </div >
    )
}
