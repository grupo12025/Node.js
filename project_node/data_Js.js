// Declarar datos fijos
const datosJS = {
    nombre2: "Jordan",
    direccion2: "Mz z lt 9",
    id3: "1530857"
  };

  
  // Mostrar los datos en la consola (esto se verá en el navegador)
  console.log("nombre3:", datosJS.nombre3);
  console.log("direccion3:", datosJS.direccion3);
  console.log("id3:", datosJS.id3);
  
  // Insertar los datos en el HTML
  document.getElementById("nombre3").innerHTML = datosJS.nombre3;
  document.getElementById("direccion3").innerHTML = datosJS.direccion3;
  document.getElementById("id3").innerHTML = datosJS.id3;
  