import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EstudianteView from "../views/EstudianteView";

//request parabol

const routes = [
  // arreglo de rutas donde cada ruta es un objeto
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/estudiante/:cedula", // los : puntons determinan que cedula sea el pathvariable
    name: "estuidanteView",
    component: EstudianteView,
  },

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // la carga perezoza involucra que no carga de inicio las paginas si no cuando la necesite
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/contador/numeros",
    name: "contadorView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // la carga perezoza involucra que no carga de inicio las paginas si no cuando la necesite
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContadorView.vue"),
  },
  {
    path: "/estudiante/tabla",
    name: "estudianteTabla",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // la carga perezoza involucra que no carga de inicio las paginas si no cuando la necesite
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/EstudianteTablaView.vue"
      ),
  },
  {
    path: "/banana",
    name: "pokemon",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // la carga perezoza involucra que no carga de inicio las paginas si no cuando la necesite
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PokemonView.vue"),
  },

  {
    path: "/formulario",
    name: "formulario5",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // la carga perezoza involucra que no carga de inicio las paginas si no cuando la necesite
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Formulario5View.vue"),
  },

  {
    path: "/pregunta",
    name: "pregunta",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // la carga perezoza involucra que no carga de inicio las paginas si no cuando la necesite
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PreguntaView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
