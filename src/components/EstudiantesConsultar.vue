<template>
  <div class="container">
    <h1>Lista de Estudiantes</h1>
    <button @click="consultarEstudiantes()">Consultar Estudiantes</button>

    <table v-if="estudiantes.length" class="tabla">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="est in estudiantes" :key="est.id">
          <td>{{ est.id }}</td>
          <td>{{ est.nombre }}</td>
          <td>{{ est.apellido }}</td>
          <td>{{ formatearFecha(est.fechaNacimiento) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axiosClient from '@/clients/EstudianteClient.js';
export default {
  data() {
    return {
      estudiantes: [],
    };
  },

  methods: {
    async consultarEstudiantes() {
      try {
        const res = await axiosClient.get("/estudiantes");
        this.estudiantes = res.data;
      } catch (error) {
        console.error("Error al obtener estudiantes:", error);
      }
    },
    formatearFecha(fecha) {
      return new Date(fecha).toLocaleDateString();
    },
  },
};
</script>

<style scoped>

.tabla {
  width: 100%;
  border-collapse: collapse;
}
.tabla th,
.tabla td {
  border: 1px solid green;
  padding: 8px;
}
.tabla th {
  background-color: rgb(142, 238, 142);
}

button{
    margin: 15px;
    padding: 10px;
    font-size: 2ch;

}
</style>