<template>
  <div id="contImag">
    <h1>{{ productB.Name }}</h1>
    <v-card id="contCard" class="mx-auto" max-width="400">
      <v-img
        id="contImgn"
        class="white--text align-end"
        height="200px"
        contain
        :src="productB.DirImg"
      >
        <v-card-title>Producto</v-card-title>
      </v-img>

      <v-card-text class="text--primary">
        <div>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </div>
      </v-card-text>

      <v-card-actions>
        <div class="botonesb">
          <div class="btnEditb">
            <v-btn
              color="white"
              class="btnFondo botonesFooter"
              @click="DirEdit"
              text
            >
              <v-icon left>mdi-pencil</v-icon>Editar
            </v-btn>
          </div>
          <div class="btnDeleteb">
            <v-btn color="white" class="btnFondo botonesFooter" text>
              <v-icon left>mdi-delete</v-icon>Eliminar
            </v-btn>
          </div>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["productB"],
  data: () => {
    return {};
  },
};
</script>

<style>
h1 {
  text-align: center;
  font-size: 2rem;
}

#contImag {
  margin-top: 35px;
  margin-bottom: 35px;
  margin-left: 20px;
  margin-right: 20px;
}

.btnFondo {
  background-color: #724293;
}

.botonesb{
    display: flex;
    justify-content: center;
    width: 100%;
}

#contCard {
  height: 100%;
  width: 100%;
}

#contImgn {
  height: 30%;
  width: 100%;
  object-fit: contain;
}

.btnEditb {
  width: 40%;
  display: flex;
  justify-content: center;
}

.btnDeletb {
  width: 80%;
  display: flex;
  justify-content: center;
}
</style>