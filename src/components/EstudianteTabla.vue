<template>
  <div class="container">
    <div v-show="true">
      <!--<div v-if="false"> -->
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

    <!-- vincular los datos de entrada de un html con una propiedad Reactiva, el arhivo javascript funge como un controlador ..... -->
    <!--Reemplazar el elemento ul y li por una tabla-->
    <table border="2">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
          <th>Género</th>
          <th>Carrera</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{ nombre, apellido, edad, genero, carrera } in lista"
          :key="nombre"
        >
          <td>{{ nombre }}</td>
          <td>{{ apellido }}</td>
          <td>{{ edad }}</td>
          <td>{{ genero }}</td>
          <td>{{ carrera }}</td>
        </tr>
      </tbody>
    </table>
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
      this.mostrar=true;
      this.nombre= null;

      setTimeout(()=>{this.mostrar=false;},3000);
    },
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
table {
  width: 100%;
  font-size: 0.95rem;
  background-color: #a9daa0;
  box-shadow: 0 8px 24px rgba(3, 126, 30, 0.05);
  border-radius: 8px;
  overflow: hidden;
  margin: 0 auto;
}

thead {
  background-color: #1cac47;
}

thead th {
  text-align: center;
  padding: 10px;
  color: #333;
  font-weight: 600;
}

tbody td {
  padding: 10px;
  border-bottom: 1px solid;
  color: #28551b;
}
</style>
