import VueRouter from 'vue-router'

const Home = ()=> import('./components/Home.vue');
const Contacto = ()=> import('./components/Contacto.vue');

//componentes del crud de productos
const Mostrar = ()=> import('./components/producto/Mostrar.vue');
const Editar = ()=> import('./components/producto/Editar.vue');
const Crear = ()=> import('./components/producto/Crear.vue');

export const routes = [
    {
        name:'home',
        path:'/',
        component:Home
    },
    {
        name:'contacto',
        path:'/contacto',
        component:Contacto
    },
    {
        name:'mostrarProductos',
        path:'/productos',
        component:Mostrar
    },
    {
        name:'editarProductos',
        path:'/editar/:id',
        component:Editar
    },
    {
        name:'crearProducto',
        path:'/crear',
        component:Crear
    },
];