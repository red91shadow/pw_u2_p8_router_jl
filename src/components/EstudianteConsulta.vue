<template>
  <div class="container">
    <h1>Buscar estudiante</h1>
    <input type="number" v-model="idEstudiante" placeholder="ID del estudiante" />
    <button @click="consultarEstudiante">Consultar</button>

    <div v-if="estudiante">
      <h2>Datos del Estudiante</h2>
      <form>
        <label for="nameId">Nombre</label>
        <input type="text" id="nameId" v-model="estudiante.nombre" />

        <label for="lastNameId">Apellido</label>
        <input type="text" id="lastNameId" v-model="estudiante.apellido" />

        <label for="dateId">Fecha de nacimiento</label>
        <input type="text" id="dateId" :value="formatearFecha(estudiante.fechaNacimiento)" readonly />
      </form>
    </div>
  </div>
</template>

<script>
import axiosClient from '@/clients/EstudianteClient.js';

export default {
  data() {
    return {
      idEstudiante: '',
      estudiante: null,
    };
  },
  methods: {
    async consultarEstudiante() {
      try {
        const res = await axiosClient.get(`/estudiantes/${this.idEstudiante}`);
        this.estudiante = res.data;
      } catch (error) {
        this.estudiante = null;
        alert("Estudiante no encontrado o error en la conexión.");
        console.error("Error:", error);
      }
    },
    formatearFecha(fecha) {
      return new Date(fecha).toLocaleDateString();
    },
  },
};
</script>

<style scoped>
.container {
  width: 90%;
  margin: 5% auto;     
  padding: 5%;         
  box-sizing: border-box;
}

input {
  display: block;
  margin-bottom: 4%;    
  padding: 2.5%;        
  width: 100%;
  box-sizing: border-box;
}

button {
  margin-bottom: 4%;
  padding: 2.5%;
  font-size: 1rem;
  width: 100%;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 1.5%;
}
</style>