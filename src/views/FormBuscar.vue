<template>
    <section>
        <div id="filtroBuscar">
            <div id="ContFiltro">
                <v-row class="d-flex justify-start mb-6" width="80">
                    <v-col>
                        <v-text-field id="Codigo"
                            v-model="Codigo"
                            label="Código"
                            :rules="codeRules"
                            :counter="5"
                            outlined
                            dense
                            type="number"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-select
                        v-model="Tipo"
                        :items="itemsTip"
                        label="Tipo"
                        data-vv-name="Tipo"
                        outlined
                        dense
                    ></v-select>
                    </v-col>
                    <v-col>
                        <v-select
                        v-model="Marca"
                        :items="itemsMarc"
                        label="Marca"
                        data-vv-name="Marca"
                        outlined
                        dense
                    ></v-select>
                    </v-col>
                </v-row>
            </div>
            <div id="ContBot">
                <v-btn
                depressed
                class="btnFondo"
                color="white"
                @click="getBusqueda"
                text
                >
                Buscar Producto
                </v-btn>
            </div>

        </div>
        <div>
             <div id="ResultBusqueda" >
                <div v-for="objProductB in productsB" :key="objProductB.llave">
                    <FormBuscarDatosV :productB="objProductB" />
                </div> 

            </div>
        </div>
       
    </section>
</template>

<script>
import FormBuscarDatosV from '../components/FormBuscarDatosV'
export default {
    components: {
      FormBuscarDatosV,
    },
    data: () => {
        return {
            productsB: [],
            Codigo: '',
            Tipo: "",
            itemsTip: [
                '',
                'Lácteo',
                'Gaseosa',
                'Galleta',
                'Ponque',
            ],
            Marca: "",
        itemsMarc: [
            '',
            'Alpina',
            'Alquería',
            'Coca-cola',
            'Bimbo',
        ],
        //reglas de form datos
        codeRules: [
            v => v.length <= 5 || 'Código debe tener máximo 5 dígitos',
        ],
        
        }
    },
    methods: {
        getBusqueda(){
            if(this.Tipo != "" & this.Marca == ""){
                if(this.Tipo == "Lácteo"){
                    let Prod1;
                    let Prod2;
                    let Prod3;
                    this.productsB = [ Prod1={DirImg:require("C:\\Users\\lenovo\\Documents\\JavaScript\\Supermercado_vue\\catalogo-supermercado-vueV3\\catalogo-supermercado-vue\\imagenes productos\\leche-caja-alqueria.jpg"),Name:"leche-caja-alqueria",llave:"Prodct1"}, Prod2={DirImg:require("C:\\Users\\lenovo\\Documents\\JavaScript\\Supermercado_vue\\catalogo-supermercado-vueV3\\catalogo-supermercado-vue\\imagenes productos\\Yogurt-ALPINA-original-fresa.jpg"),Name:"Yogurt-ALPINA-fresa",llave:"Product2"}, Prod3={DirImg:require("C:\\Users\\lenovo\\Documents\\JavaScript\\Supermercado_vue\\catalogo-supermercado-vueV3\\catalogo-supermercado-vue\\imagenes productos\\yogurt-mora-150gr.jpg"),Name:"yogurt-mora-150gr",llave:"Product3"}];
            
                }else if(this.Tipo == "Gaseosa"){
                    let Prod1;
                    let Prod2;
                    this.productsB = [Prod1={DirImg:require("C:\\Users\\lenovo\\Documents\\JavaScript\\Supermercado_vue\\catalogo-supermercado-vueV3\\catalogo-supermercado-vue\\imagenes productos\\del valle-mora.jpg"),Name:"del valle-mora",llave:"Product2"}];
            
                }else if(this.Tipo == "Galleta"){
                    let Prod1;
                    this.productsB = [Prod1={DirImg:require("C:\\Users\\lenovo\\Documents\\JavaScript\\Supermercado_vue\\catalogo-supermercado-vueV3\\catalogo-supermercado-vue\\imagenes productos\\saltinas-mantequilla.jpg"),Name:"saltinas-mantequilla",llave:"Product1"}];
                }
            }else if(this.Tipo == "" & this.Marca != ""){
                if(this.Marca == "Coca-cola"){
                    let Prod1;
                    let Prod2;
                    this.productsB = [Prod1={DirImg:require("C:\\Users\\lenovo\\Documents\\JavaScript\\Supermercado_vue\\catalogo-supermercado-vueV3\\catalogo-supermercado-vue\\imagenes productos\\BEBIDA-GASEOSA-ORIGINAL.jpg"),Name:"BEBIDA-GASEOSA-ORIGINAL",llave:"Product1"}, Prod2={DirImg:require("C:\\Users\\lenovo\\Documents\\JavaScript\\Supermercado_vue\\catalogo-supermercado-vueV3\\catalogo-supermercado-vue\\imagenes productos\\del valle-mora.jpg"),Name:"del valle-mora",llave:"Product2"}];
            
                }else if(this.Marca == "Alquería"){
                    let Prod1;
                    let Prod2;
                    let Prod3;
                    this.productsB = [Prod1={DirImg:require("C:\\Users\\lenovo\\Documents\\JavaScript\\Supermercado_vue\\catalogo-supermercado-vueV3\\catalogo-supermercado-vue\\imagenes productos\\leche-caja-alqueria.jpg"),Name:"leche-caja-alqueria",llave:"Product1"}];
            
                }else if(this.Marca == "Alpina"){
                    let Prod1;
                    let Prod2;
                    let Prod3;
                    this.productsB = [Prod1={DirImg:require("C:\\Users\\lenovo\\Documents\\JavaScript\\Supermercado_vue\\catalogo-supermercado-vueV3\\catalogo-supermercado-vue\\imagenes productos\\Yogurt-ALPINA-original-fresa.jpg"),Name:"Yogurt-ALPINA-fresa",llave:"Product1"}, Prod2={DirImg:require("C:\\Users\\lenovo\\Documents\\JavaScript\\Supermercado_vue\\catalogo-supermercado-vueV3\\catalogo-supermercado-vue\\imagenes productos\\yogurt-mora-150gr.jpg"),Name:"yogurt-mora-150gr",llave:"Product2"}];
                }
            }else if(this.Tipo != "" & this.Marca != ""){
                console.log("Busqueda por dos atributos");
            }
        }
    }

}
</script>

<style>

#filtroBuscar{
    /*background-color: #aed269;*/
    width: 100%;
    height: 140px;
    margin-top: 0px;
    background-color: #f4f4f4;
    padding: 45px;
}

#ContFiltro{
    width: 60%;
    float: left;
    height: 50%;
    background-color: #f4f4f4;
}

.btnFondo{
  background-color: #724293;
}

#ContBot{
    width: 40%;
    float: right;
    text-align: center;
    background-color: #f4f4f4;
}

#ResultBusqueda{
    /*padding: 30px;*/
    background-color: #f4f4f4;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

</style>