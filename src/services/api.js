import axios from 'axios';

/* Endereços para cada emulador/simulador:
 ** Genymotion:              http://10.0.3.2:3333/
 ** Emulador Android Studio: http://10.0.2.2:3333/
 ** Simulador IOS:           http://localhost:3333/
 */

//const BASE_URL = 'http://4c7ca65d.ngrok.io';

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
