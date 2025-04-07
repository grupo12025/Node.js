// Declarar datos fijos
const datos = {
    nombre: "Jeremi",
    direccion: "Mz i lt 20",
    id: "1472277"
  };

  
  
  // Mostrar los datos en la consola (esto se verá en el navegador)
  console.log("Nombre:", datos.nombre);
  console.log("Dirección:", datos.direccion);
  console.log("ID:", datos.id);
  
  // Insertar los datos en el HTML
  document.getElementById("nombre").innerHTML = datos.nombre;
  document.getElementById("direccion").innerHTML = datos.direccion;
  document.getElementById("id").innerHTML = datos.id;