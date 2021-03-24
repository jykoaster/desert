<template>
  <v-container id="productpage" class="pt-0">
    <v-row justify="center" class="productbanner pa-3">
      <v-img
        :src="require('~/assets/photo-1512484457149-266d165a4eca.jpg')"
        max-width="100%"
        max-height="500"
      ></v-img>
    </v-row>
    <v-row justify="space-between">
      <v-col cols="3" class="listoption">
        <v-list-item class="listheader">
          <v-list-item-content class="pt-4 pb-4">
            <v-list-item-title>甜點類別</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(v, i) in list"
          :key="i"
          :to="`${v.path}`"
          class="classlist"
        >
          <v-list-item-content class="pt-4 pb-4">
            <v-list-item-title>{{ v.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="9" class="productlist">
        <v-row justify="space-between">
          <v-col
            v-for="(v, i) in products"
            :key="i"
            class="mb-5 d-flex justify-end"
            cols="6"
          >
            <v-card class="ma-0" max-width="300" outlined tile>
              <v-img
                class="justify-end"
                :src="require(`~/assets/${v.src}.jpg`)"
                max-height="280"
              >
              </v-img>
              <div class="d-flex text-center weight-header-word">
                <v-col cols="7" class="light-border">{{ v.name }}</v-col>
                <v-col cols="5" class="light-border">NT${{ v.price }}</v-col>
              </div>
              <v-card-actions class="text-center addcart" @click="addcart(v)">
                <v-card-text class="pa-2">加入購物車</v-card-text>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    list: [
      { name: "所有甜點", path: "/product/all" },
      { name: "本日精選", path: "/product/1" },
      { name: "人氣推薦", path: "/product/2" },
      { name: "新品上市", path: "/product/3" },
    ],
    products: [],
  }),
  async mounted() {
    if (this.$route.params.classid == "all") {
      this.products = await this.$store.dispatch("product/getitems");
    } else {
      this.products = await this.$store.dispatch("product/getitemsbyclass", {
        classid: this.$route.params.classid,
      });
    }
  },
  methods: {
    addcart(item) {
      const param = {
        id: item.id,
        name: item.name,
        price: item.price,
        count: 1,
        src: item.src,
      };
      this.$store.commit("cart/SET_ITEM", param);
      alert("加入購物車成功");
    },
  },
};
</script>
<style lang="scss" scoped>
#productpage {
  width: 100%;
}
.productbanner {
  margin-bottom: 60px;
}
.listoption {
  .listheader {
    .v-list-item__title {
      color: #fff;
    }
    background-color: $weightcolor;
  }
  .v-list-item__title {
    text-align: center;
    color: $weightcolor;
    font-size: 24px;
    font-weight: bold;
  }
  .v-list-item {
    border: $lightborder;
  }
}
</style>
