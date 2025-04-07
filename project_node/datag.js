// Declarar datos fijos
const datosg = {
    nombre2: "Gilmer",
    direccion2: "Mz A lt 3",
    id2: "1541224"
  };

  

  
  
  // Mostrar los datos en la consola (esto se verá en el navegador)
  console.log("Nombre2:", datosg.nombre2);
  console.log("Dirección2:", datosg.direccion2);
  console.log("id2:", datosg.id2);
  
  // Insertar los datos en el HTML
  document.getElementById("nombre2").innerHTML = datosg.nombre2;
  document.getElementById("direccion2").innerHTML = datosg.direccion2;
  document.getElementById("id2").innerHTML = datosg.id2;
  