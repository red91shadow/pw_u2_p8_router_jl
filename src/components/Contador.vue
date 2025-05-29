<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>{{ this.value }}<sup>2</sup>= {{ calCuadrado }}</p>
    <div>
      <button v-on:click="incrementar()">+1</button>
      <button @click="decrementar()">-1</button>
    </div>

    <!--<p>{{ numero + 1 }}</p>
    <p>{{ texto }}</p>
    <p>{{ activo }}</p>
    <p>{{ usuraio.edad }}</p>
    <p>{{ arreglo }}</p>
    {{ 1 + 1}}       representacion declarativa 
    {{ false ? "Es verdadero" : "Es falso" }}
    -->
  </div>
</template>

<script>
// la representacion declarativa es un fragmento de codigo donde puedo ejecutar codigo java script
//propiedades reactivas ( concepto de vue): son atributos que permiten vincular la codificacion java script con la vista, se llaman reactivas por que maneja un sistema de observacion que detencta cambio en los datos y permiten actaulizar las vistas de manera reactiva
//porpiedades computadas: son una especie de metodos que se ejecutan una unica vez y guarda la respuesta en cache , cunado se ejecuta a una propiedad computada toma el valor del cache simepre y cuando no cambbie ni el cuerpo de la propiedad computada o el resultado de la propiedad computada
// directivas : me permiten gestionar eventos v-
export default {
  // export default maneja opciones o items
  //props: ["title", "value"],
  props: {
    title: String,
    value: {
      type: Number,
      required: false,
      default: 100,
      validatos(value) {
        // se puede declarar una validacion persontalizada que devuelva true o false
        return value > 0;
      },
    },
    p1: Boolean,
    p2: Array,
    p3: Object,
    p4: Function,
    p5: Date,
    p6: Symbol,
  },
  data() {
    return {
      //como atributos declaro la propiedad reactiva
      numero: 20,
    };
  },

  methods: {
    //podemos declarar las funciuones o metodos
    calcularCuadrado() {
      console.log("Entro al metodo");
      return this.numero * this.numero;
    },

    incrementar() {
      this.numero++;
    },
    decrementar() {
      this.numero--;
    },

    metodo1() {
      return 45;
    },
  },

  computed: {
    calCuadrado() {
      console.log("Entro propiedad computada");

      //if(this.numero === 5 ){ this.numero = this.numero +5 };

      return this.numero * this.numero;
      //no se vuelve a ejecutar el metdo al menos que cmabie el resultado
    },
  },

  created() {
    if (this.value > 0) {
      console.log("Es correcto");
    } else {
      throw new Error("erro el valor no puede ser menor que cero");
    }
  },
};
</script>

<style>
.container {
  background: greenyellow;
}
</style>
