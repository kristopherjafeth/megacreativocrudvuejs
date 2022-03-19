<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header"><h4>Editar Producto</h4></div>
                <div class="card-body">
                    <form @submit.prevent="actualizar">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Cliente</label>
                                    <select class="form-select"  v-model="producto.nombre">
                                        <option value="JOSE MARTINEZ">JOSE MARTINEZ</option>
                                        <option value="CARLOS CRUZ">CARLOS CRUZ</option>
                                        <option value="DANIELA MENDEZ">DANIELA MENDEZ</option>
                                        </select>
                                </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Producto</label>
                                    <select class="form-select"  v-model="producto.producto">
                                        <option value="COCA COLA">COCA COLA</option>
                                        <option value="MALTA">MALTA</option>
                                        <option value="DORITOS">DORITOS</option>
                                        </select>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Cantidad</label>
                                    <input type="text" class="form-control" v-model="producto.cantidad">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Estado</label>
                                    <select class="form-select"  v-model="producto.estado">
                                        <option value="PENDIENTE">PENDIENTE</option>
                                        <option value="CONFIRMADA">CONFIRMADA</option>
                                        <option value="ENTREGADA">ENTREGADA</option>
                                        </select>
                                </div>
                            </div>
                            
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Guardar</button>
                            </div>
                        </div>      
                        </div>                   
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"editarProducto",
    data(){
        return {
            producto:{
                nombre:"",
                producto:"",
                cantidad:"",
                estado:""
            }
        }
    },
   mounted(){
       this.mostrarProductos()
   },
   methods:{
       async mostrarProductos(){
            await this.axios.get(`/api/producto/${this.$route.params.id}`)
            .then(response=>{
                const {nombre, producto, estado, cantidad } = response.data
                this.producto.nombre = nombre,
                this.producto.producto = producto,
                this.producto.cantidad = cantidad,
                this.producto.estado = estado
            })
            .catch(error=>{
                console.log(error)
            })
       },
       async actualizar(){
            await this.axios.put(`/api/producto/${this.$route.params.id}`, this.producto)
            .then(response=>{
                this.$router.push({
                    name:"mostrarProductos"
                })
            })
            .catch(error=>{
                console.log(error)
            })
       }
   }
}
</script>
