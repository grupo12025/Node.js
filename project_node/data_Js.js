// Declarar datos fijos
const datosJS = {
    nom3: "Jordan",
    direccion3: "Mz z lt 9",
    id03: "1530857"
  };

  
  // Mostrar los datos en la consola (esto se verá en el navegador)
  console.log("nom3:", datosJS.nom3);
  console.log("direc3:", datosJS.direc3);
  console.log("id03:", datosJS.id03);
  
  // Insertar los datos en el HTML
  document.getElementById("nom3").innerHTML = datosJS.nom3;
  document.getElementById("direccion3").innerHTML = datosJS.direc3;
  document.getElementById("id03").innerHTML = datosJS.id03;
  