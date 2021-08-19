document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "50661833697";

  let cliente = document.querySelector("#cliente").value;
  let fecha = document.querySelector("#fecha").value;
  let hora = document.querySelector("#hora").value;
  let correo electronico = document.querySelector("#empleado").value;
  let telefono = document.querySelector("#servicio").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/50661833697=${telefono}&text=
		*_MI NEGOCIO_*%0A
		*Reservas*%0A%0A
		*¿Cuál es tu nombre?*%0A
		${cliente}%0A
		*Indica la fecha de tu reserva*%0A
		${fecha}%0A
		*Indica la hora de tu reserva*%0A
		${hora}%0A
		*Correo electronico*%0A
		${correo}%0A
		*¿numero de telefono mas codigo de pais?*%0A
		${telefono}`;

  if (cliente === "" || fecha === "" || hora === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

  window.open(url);
});
