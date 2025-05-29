<template>
  <div class="container">
    <h1>Modelos de Autos</h1>

    <label for="id_modelo">Modelo: </label>
    <input id="id_modelo" type="text" v-model="modeloNew" />

    <label for="id_color">Color del Auto:</label>
    <input id="id_color" type="text" v-model="colorNew" />

    <label for="id_marca">Marca del auto:</label>
    <input id="id_marca" type="text" v-model="marcaNew" />

    <label for="id_placa">Número de placa:</label>
    <input id="id_placa" type="text" v-model="placaNew" />

    <label for="id_kilometraje">Kilometraje:</label>
    <input id="id_kilometraje" type="number" v-model="kilometrajeNew" />
    <button v-on:click="agregarAuto()">Enviar</button>

    <!-- Mensaje de error -->
    <div v-if="errorMensaje" class="error">{{ errorMensaje }}</div>

    <!-- Mensaje de éxito -->
    <div v-if="exitoMensaje" class="exito">{{ exitoMensaje }}</div>

    <table border="2">
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Color</th>
          <th>Marca</th>
          <th>Numero de Placa</th>
          <th>Kilometraje</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="{ modelo, color, marca, placa, kilometraje } in lista"
          :key="modelo"
        >
          <td>{{ modelo }}</td>
          <td>{{ color }}</td>
          <td>{{ marca }}</td>
          <td>{{ placa }}</td>
          <td>{{ kilometraje }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorNew: "Ingresar Datos",
      modeloNew: "Ingresar Datos",
      marcaNew: "Ingresar Datos",
      placaNew: "Ingresar Datos",
      kilometrajeNew: "0",
      lista: [
        {
          color: "Rojo",
          modelo: "Gran Torino",
          marca: "Ford",
          placa: "PCZ-5156",
          kilometraje: "45",
        },
      ],

      errorMensaje:"",
      exitoMensaje:"",
    };
  },

  methods: {
    agregarAuto() {
      this.errorMensaje = "";
      this.exitoMensaje = "";
      if (
        !this.colorNew.trim() ||
        !this.modeloNew.trim() ||
        !this.marcaNew.trim() ||
        !this.placaNew.trim() ||
        this.kilometrajeNew === "" ||
        isNaN(this.kilometrajeNew)
      ) {
        this.errorMensaje =
          "Por favor, completa todos los campos correctamente.";
        return;
      }

      const nuevoAuto = {
        color: this.colorNew,
        modelo: this.modeloNew,
        marca: this.marcaNew,
        placa: this.placaNew,
        kilometraje: this.kilometrajeNew,
      };

      this.lista.push(nuevoAuto);
      this.exitoMensaje = "Auto guardado exitosamente.";

      // Limpiar campos
      this.colorNew = "";
      this.modeloNew = "";
      this.marcaNew = "";
      this.placaNew = "";
      this.kilometrajeNew = "";

      // Ocultar el mensaje
      setTimeout(() => {
        this.errorMensaje = "";
        this.exitoMensaje = "";
      }, 3000);
    },
  },
};
</script>

<style scoped>
h1 {
  font-family: "Courier New", Courier, monospace;
}
.container {
  background: #98ff98;
  border: 1px solid;
  border-radius: 20px;
  padding: 20px;
}
label {
  display: block;
  font-family: "Courier New", Courier, monospace;
  text-align: left;
  padding: 10px;
  font-weight: 900;
}

input {
  font-family: "Courier New", Courier, monospace;
  display: block;
  width: 96%;
  padding: 10px;
}

button {
  font-family: "Courier New", Courier, monospace;
  margin: 10px;
  padding: 5px;
  border: 1px solid;
  border-radius: 5px;
  font-size: 15px;
  background: #c5f5c5;
  cursor: pointer;
}

table {
  background: #7cfc7c;
  font-family: "Courier New", Courier, monospace;
  border: 2px solid;
  border-radius: 5px;
  margin: 0 auto;
}

thead {
  text-align: center;
  background: #5cb45c;
}

tbody {
  background: #c5f5c5;
}

.error {
  color: red;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: "Courier New", Courier, monospace;
}

.exito {
  color: green;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: "Courier New", Courier, monospace;
}
</style>