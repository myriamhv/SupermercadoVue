import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: {}
  },
  mutations: {
    setProductos(state, payload){
      state.products = payload;
    }
  },
  actions: {
    getProductos({commit}){
      //const data = {pro1:{dirimg:require('../assets/leche.jpeg'),llave:"prod1",nombre:"Leche en caja"}, pro2:{dirimg:require('../assets/papas_margarita.jpeg'),llave:"prod2",nombre:"Papas personales"}, pro3:{dirimg:require('../assets/tomates.jpeg'),llave:"prod3",nombre:"Tomate de árbol"}, pro4:{dirimg:require('../assets/leche.jpeg'),llave:"prod4",nombre:"Leche en caja"}, pro5:{dirimg:require('../assets/papas_margarita.jpeg'),llave:"prod5",nombre:"Papas personales"}, pro6:{dirimg:require('../assets/tomates.jpeg'),llave:"prod6",nombre:"Tomate de árbol"}, pro7:{dirimg:require('../assets/leche.jpeg'),llave:"prod7",nombre:"Leche en caja"}, pro8:{dirimg:require('../assets/papas_margarita.jpeg'),llave:"prod8",nombre:"Papas personales"}, pro9:{dirimg:require('../assets/tomates.jpeg'),llave:"prod9",nombre:"Tomate de árbol"}};
      const data = {};
      let DatImg = ['leche.jpeg','papas_margarita.jpeg','tomates.jpeg'];
      let id;
      let ListProd = []
      for(id of DatImg){
        ListProd.push(require('../assets/'+id))
      }
      data["pro1"] = {dirimg:require('../assets/leche.jpeg'),llave:"prod1",nombre:"Leche en caja", descripcion:"Leche entera Alpina"};
      data["pro2"] = {dirimg:require('../assets/papas_margarita.jpeg'),llave:"prod2",nombre:"Papas personales", descripcion:"Papa clasica surtida Margarita"};
      data["pro3"] = {dirimg:require('../assets/tomates.jpeg'),llave:"prod3",nombre:"Tomate de árbol", descripcion:"Tomatede árbol sin conservantes"};
      data["pro4"] = {dirimg:require('../assets/leche.jpeg'),llave:"prod4",nombre:"Leche en caja", descripcion:"Leche entera Alpina"};
      data["pro5"] = {dirimg:require('../assets/papas_margarita.jpeg'),llave:"prod5",nombre:"Papas personales", descripcion:"Papa clasica surtida Margarita"};
      data["pro6"] = {dirimg:require('../assets/tomates.jpeg'),llave:"prod6",nombre:"Tomate de árbol", descripcion:"Tomatede árbol sin conservantes"};
      data["pro7"] = {
        dirimg:ListProd[0],
        llave:"prod1",
        nombre:"Leche en caja",
        descripcion:"Leche entera Alpina"
      };
      data["pro8"] = {
        dirimg:ListProd[1],
        llave:"prod2",
        nombre:"Papas personales",
        descripcion:"Papa clasica surtida Margarita"
      };
      data["pro9"] = {
        dirimg:ListProd[2],
        llave:"prod3",
        nombre:"Tomate de árbol",
        descripcion:"Tomatede árbol sin conservantes"
      };
      console.log(data);
      commit('setProductos', data);
    },
  },
  modules: {
  }
})
