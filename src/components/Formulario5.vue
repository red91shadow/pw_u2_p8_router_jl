<template>
  <div class="container">
    <h1>Modelos de Autos</h1>

    <label for="id_modelo">Modelo: </label>
    <input id="id_modelo" type="text" v-model="modeloNew" />
    <span v-if="mensaje.modelo" class="error-campo">{{ mensaje.modelo }}</span>

    <label for="id_color">Color del Auto:</label>
    <input id="id_color" type="text" v-model="colorNew" />
    <span v-if="mensaje.color" class="error-campo">{{ mensaje.color }}</span>

    <label for="id_marca">Marca del auto:</label>
    <input id="id_marca" type="text" v-model="marcaNew" />
    <span v-if="mensaje.marca" class="error-campo">{{ mensaje.marca }}</span>

    <label for="id_placa">Número de placa:</label>
    <input id="id_placa" type="text" v-model="placaNew" />
    <span v-if="mensaje.placa" class="error-campo">{{ mensaje.placa }}</span>

    <label for="id_kilometraje">Kilometraje:</label>
    <input id="id_kilometraje" type="number" v-model="kilometrajeNew" />
    <span v-if="mensaje.kilometraje" class="error-campo">{{
      mensaje.kilometraje
    }}</span>

    <button @click="agregarAuto()">Enviar</button>

    <div v-if="errorMensaje" class="error">{{ errorMensaje }}</div>
    <div v-if="exitoMensaje" class="exito">{{ exitoMensaje }}</div>
    <div v-if="mensajeFinal" class="error">{{ mensajeFinal }}</div>

    <table border="2">
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Color</th>
          <th>Marca</th>
          <th>Número de Placa</th>
          <th>Kilometraje</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="{ modelo, color, marca, placa, kilometraje } in lista"
          :key="placa"
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
      colorNew: "",
      modeloNew: "",
      marcaNew: "",
      placaNew: "",
      kilometrajeNew: null,

      mensaje: {
        modelo: null,
        color: null,
        marca: null,
        placa: null,
        kilometraje: null,
      },
      lista: [
        {
          color: "Rojo",
          modelo: "Gran Torino",
          marca: "Ford",
          placa: "PCZ-5156",
          kilometraje: 45,
        },
      ],

      errorMensaje: "",
      exitoMensaje: "",
      mensajeFinal: null,
    };
  },

  methods: {
    agregarAuto() {
      this.errorMensaje = "";
      this.exitoMensaje = "";
      this.mensajeFinal = null;

      for (let key in this.mensaje) {
        this.mensaje[key] = null;
      }

      const formIsValid = this.validarEntradas();

      if (!formIsValid) {
        if (!this.mensajeFinal) {
          this.errorMensaje =
            "Por favor, corrige los errores en el formulario.";
        }
        setTimeout(() => {
          this.errorMensaje = "";
          this.mensajeFinal = null;
        }, 3000);
        return;
      }

      const placaExistente = this.lista.some(
        (auto) => auto.placa === this.placaNew
      );
      if (placaExistente) {
        this.mensaje.placa = "Ya existe un auto con esta placa.";
        this.errorMensaje = "La placa ya está registrada.";
        setTimeout(() => {
          this.errorMensaje = "";
        }, 3000);
        return;
      }

      const nuevoAuto = {
        color: this.colorNew,
        modelo: this.modeloNew,
        marca: this.marcaNew,
        placa: this.placaNew,
        kilometraje: parseFloat(this.kilometrajeNew),
      };

      this.lista.push(nuevoAuto);
      this.exitoMensaje = "Auto guardado exitosamente.";

      this.colorNew = "";
      this.modeloNew = "";
      this.marcaNew = "";
      this.placaNew = "";
      this.kilometrajeNew = null;

      setTimeout(() => {
        this.exitoMensaje = "";
      }, 3000);
    },

    validarEntradas() {
      try {
        let isValid = true;

        for (let key in this.mensaje) {
          this.mensaje[key] = null;
        }
        this.mensajeFinal = null;

        if (this.modeloNew.trim() === "") {
          this.mensaje.modelo = "El modelo es obligatorio.";
          isValid = false;
        }

        if (this.colorNew.trim() === "") {
          this.mensaje.color = "El color es obligatorio.";
          isValid = false;
        }

        if (this.marcaNew.trim() === "") {
          this.mensaje.marca = "La marca es obligatoria.";
          isValid = false;
        }

        if (this.placaNew.trim() === "") {
          this.mensaje.placa = "El número de placa es obligatorio.";
          isValid = false;
        }

        if (this.kilometrajeNew === null) {
          this.mensaje.kilometraje =
            "El kilometraje es obligatorio y debe ser un número.";
          isValid = false;
        } 

        return isValid;
      } catch (error) {
        console.error("Error inesperado en validarEntradas:", error);
        this.mensajeFinal =
          "Ha ocurrido un error inesperado en el sistema durante la validación.";
        return false;
      }
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
  max-width: 600px;
  margin: 20px auto;
}
label {
  display: block;
  font-family: "Courier New", Courier, monospace;
  text-align: left;
  padding: 10px 0 5px 10px;
  font-weight: 900;
}

input {
  font-family: "Courier New", Courier, monospace;
  display: block;
  width: calc(100% - 20px);
  padding: 10px;
  margin: 0 10px 5px 10px;
  box-sizing: border-box;
}

.error-campo {
  color: red;
  font-family: "Courier New", Courier, monospace;
  font-size: 0.85em;
  display: block;
  margin-left: 10px;
  margin-bottom: 10px;
}

button {
  font-family: "Courier New", Courier, monospace;
  margin: 10px;
  padding: 8px 15px;
  border: 1px solid;
  border-radius: 5px;
  font-size: 16px;
  background: #c5f5c5;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #a9e0a9;
}

table {
  background: #7cfc7c;
  font-family: "Courier New", Courier, monospace;
  border: 2px solid;
  border-radius: 5px;
  margin: 20px auto 0 auto;
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

thead {
  text-align: center;
  background: #5cb45c;
}

tbody tr:nth-child(even) {
  background: #e0ffe0;
}

.error {
  color: red;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 10px;
  font-family: "Courier New", Courier, monospace;
}

.exito {
  color: green;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 10px;
  font-family: "Courier New", Courier, monospace;
}
</style>
