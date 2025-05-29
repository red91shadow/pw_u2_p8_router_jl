<template>
  <div class="container">
    <img v-if="imagen" :src="imagen" alt="No se pudo cargar" srcset="" />
    <div class="container-2"></div>
    <div class="pregunta-container">
      <input v-model="pregunta" type="text" placeholder="Hazme una pregunta" />
      <p>Recuerda terminar con el signo de pregunta '?'</p>

      <div v-if="esValida">
        <h2>{{ pregunta }}</h2>
        <h1>{{ respuesta }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { consultarRespuestaFachada } from "@/clients/YesNoClient.js";
export default {
  data() {
    return {
      pregunta: null,
      respuesta: null,
      imagen: null,
      esValida: false,
    };
  },
  watch: {
    pregunta(value, oldValue) {
      // if(value.endsWith(, endPosition))
      this.esValida = false;

      if (value.includes("?")) {
        this.esValida = true;
        console.log("valor actual: " + value);
        console.log("valor anterior: " + oldValue);
        //Aqui deberia consultar el API , cada que consumamos una API debo tener un archivo cliente
        this.consumirAPI();
      }
    },
  },

  methods: {
    async consumirAPI() {
      this.respuesta = "Pensando...........";
      const resp = await consultarRespuestaFachada();
      console.log(resp);
      console.log(resp.image);
      console.log(resp.answer);
      console.log(resp.force);
      this.respuesta = resp.answer;
      this.imagen = resp.image;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.container-2,
img {
  /* todo el ancho y todo el alto*/
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  /* como si fuera una marca de agua */
  left: 0px;
  top: 0px;
}

.container-2 {
  background-color: rgba(0, 0, 0, 0.829);
}

input {
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  width: 250px;
  margin-top: 50px;
}

input:focus {
  outline: none;
}

p {
  color: white;
  font-size: large;
}

h1,
h2 {
  color: #fff;
}

h2 {
  margin-top: 100px;
}

.pregunta-container {
  position: relative;
  /* color: #fff; */
}
</style>
