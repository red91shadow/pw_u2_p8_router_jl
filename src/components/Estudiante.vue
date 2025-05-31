<template>
  <div class="container">
    <div v-if="false">
      <!-- v.if simpre recibe un booleano-->
      <h1>Estudiante Guardado</h1>
    </div>
    <label for="id_nombre">Nombre:</label>
    <input v-model="nuevoNombre" id="id_nombre" type="text" />

    <label for="id_apellido">Apellido:</label>
    <input v-model="nuevoApellido" id="id_apellido" type="text" />

    <label for="id_edad">Edad:</label>
    <input v-model="nuevoEdad" id="id_edad" type="number" />

    <label for="id_genero">Genero:</label>
    <input v-model="nuevoGenero" id="id_genero" type="text" />

    <label for="id_carrera">Carrera:</label>
    <input v-model="nuevoCarrera" id="id_carrera" type="text" />

    <button v-on:click="agregarEstudiante()">Agregar</button>

    <button v-on:click="obtenerPathVariable()">PathVariable</button>

    <!-- vincular los datos de entrada de un html con una propiedad Reactiva, el arhivo javascript funge como un controlador ..... -->
    <ul>
      <li
        v-for="{ nombre, apellido, edad, genero, carrera } in lista"
        :key="nombre"
      >
        Estudiante: {{ nombre }} - Apellido: {{ apellido }} - Edad: {{ edad }} -
        Genero: {{ genero }} - Carrera: {{ carrera }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoNombre: "Nuevo",
      nuevoApellido: "Nuevo",
      nuevoEdad: "Nuevo",
      nuevoGenero: "Nuevo",
      nuevoCarrera: "Nuevo",

      lista: [
        {
          nombre: "Joel",
          apellido: "Luna",
          edad: 21,
          genero: "M",
          carrera: "Ingeniería",
        },
        {
          nombre: "Pedro",
          apellido: "Pascal",
          edad: 22,
          genero: "M",
          carrera: "Arquitectura",
        },
        {
          nombre: "Daniel",
          apellido: "Teran",
          edad: 20,
          genero: "M",
          carrera: "Derecho",
        },
      ],
      mostrar: false,
    };
  },

  methods: {
    agregarEstudiante() {
      const nuevo = {
        nombre: this.nuevoNombre,
        apellido: this.nuevoApellido,
        edad: this.nuevoEdad,
        genero: this.nuevoGenero,
        carrera: this.nuevoCarrera,
      };
      //this.lista.unshift();
      this.lista.push(nuevo);
      this.mostrar = true;
    },

    obtenerPathVariable() {
      //ciclo de vida de componentes , los componenetes tiene un cilo de vida son las  etapas desde que un componenete se crea y se destruye
      //es fundamental para gestionar funciones como la carga de datos, limpesza de de datos y eventos, y cada
      // una de las etapas del ciclo de vida del componente se lo declara como una
      //opcion mas del option api .
      const cedula = this.$route.params.cedula;
      console.log(cedula);

      const anion = this.$route.query.anion;
      console.log(anion);
      const mes = this.$route.query.mes;
      console.log(mes);
    },
  },
  //estudiar esta seccion
  beforeCreate() {
    console.log("beforeCreate");
  },

  created() {
    console.log("cuando se crea el componente");
  },

  beforeMount() {
    console.log("beforeMount");
  },

  mounted() {
    const cedula = this.$route.params.cedula;
    console.log(cedula);

    const anion = this.$route.query.anion;
    console.log(anion);
    const mes = this.$route.query.mes;
    console.log(mes);
    console.log("mounted");
  },

  beforeUpdate() {
    console.log("beforeUpdate");
  },

  update() {
    console.log("update");
  },

  beforeUnmount() {
    console.log("beforeUnmount");
  },

  unmounted() {
    console.log("unmounted");
  },
};
</script>

<style scoped>
.container {
  background: rgb(186, 240, 186);
  border: 1px solid;
  border-radius: 12px;
  max-width: 750px;
  margin: 50px auto;
  padding: 30px;
}

label {
  display: block;
  color: black;
  text-align: left;
  padding: 5px;
}

input {
  display: block;
  background: rgb(93, 219, 93);
  width: 96%;
  border-radius: 5px;
  margin-bottom: 20px;
  border: 1px solid black;
  padding: 10px 10px;
}

button {
  background: rgb(93, 219, 93);
  color: black;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  width: 100px;
}

ul {
  list-style: none;
  margin-top: 50px;
}

li {
  background: rgb(94, 224, 94);
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 9px;
  font-size: 15px;
  color: white;
}
</style>
