<template>
<div class="container">
    <div class="row">
        <div class="col-lg-12 mb-4">
            <router-link :to='{name:"crearProducto"}' class="btn btn-success">  
                <i class="fa-solid fa-circle-plus"></i>
                Nuevo</router-link>
        </div>
        <div class="col-12">
            <div class="table-responsive">
                <table class="table table-bordered">
                    <thead class="bg-dark text-white">
                        <tr>
                            <th>ID</th>
                            <th>NOMBRE</th>
                            <th>PRODUCTO</th>
                            <th>CANTIDAD</th>
                            <th>ESTADO</th>
                            <th>ACCIONES</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr v-for="producto in productos" :key="producto.id">
                            <td>{{ producto.id }}</td>
                            <td>{{ producto.nombre }}</td>
                            <td>{{ producto.producto }}</td>
                            <td>{{ producto.cantidad }}</td>
                            <td>{{ producto.estado }}</td>
                            <td>
<router-link :to='{name:"editarProductos", params:{id:producto.id}}' class="btn btn-info"> 
    <i class="fa-solid fa-pen-to-square"></i> Editar
</router-link>
<a type="button" @click="borrarProducto(producto.id)" class="btn btn-danger">
    <i class="fa-solid fa-trash-can"></i> </a>
                            </td>
                            </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</div>
</template>



<script>
export default {
    name:"productos",
    data(){
        return{
            productos:[]
        }
    },
    mounted(){
        this.mostrarProductos()
    },
    methods:{
        async mostrarProductos(){
            await this.axios.get('/api/producto')
            .then(response=>{
                this.productos = response.data
            })
            .catch(error=>{
                this.producto = []
            })
        },
        borrarProducto(id){
            if (confirm("¿Estás seguro de eliminar este producto?")){
                this.axios.delete(`/api/producto/${id}`).then(response=>{
                    this.mostrarProductos()
                }).catch(error=>{
                    this.producto = []
                })
            }
        }
    }

}
</script>
