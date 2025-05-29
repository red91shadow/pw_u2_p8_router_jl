// npm axios es una libreria que nos pérmite consumir APIs
import axios from "axios";

const consultarRespuesta = async () => {
  //siempre que hago una pencion a una api debo poner la palabra reservada await , y ese metodo debe tener el async
  // verbos http o metods
  // esta api en particular se debe llammar con get, get es solo para una consulta
  const respuesta = axios.get("https://yesno.wtf/api").then((rpt) => rpt.data);
  console.log(); //soloi para la linea que tiene axios no es necesario el await, eso no quiere decir que no vaya a esperar
  return respuesta;
};

//fuciones fachada, es algo que se expone como fachada pero expone funcioens internas

//el metodo que si va a cosumirse desde afura debe estar con la palabra reservada export
export const consultarRespuestaFachada = async () => {
  return await consultarRespuesta();
};
