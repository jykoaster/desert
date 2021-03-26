<template>
  <v-container id="cartpage">
    <v-row justify="center" justify-md="space-between">
      <!-- pc -->
      <v-col cols="7" class="d-none d-md-block pa-5">
        <div class="weight-subtitle-word bfont lightbgcolor pa-5 text-center">
          您的購物車
        </div>
        <div
          v-for="(v, i) in items"
          :key="i"
          class="d-flex mt-5 pb-5 align-center text-center justify-space-between itemdetail"
        >
          <v-img
            :src="require(`~/assets/${v.src}.jpg`)"
            height="100"
            max-width="100"
          ></v-img>
          <div class="text-left weight-content-word">
            <p class="mb-0">{{ v.name }}</p>
            <p class="mb-0">NT$ {{ v.price }}</p>
          </div>
          <div class="d-flex">
            <v-btn text outlined tile small height="50" @click="increase(v)"
              >-</v-btn
            >
            <input type="text" :value="v.count" class="text-center" disabled />
            <v-btn text outlined tile small height="50" @click="crease(v)"
              >+</v-btn
            >
          </div>
          <p class="mb-0 weight-header-word">NT$ {{ v.price * v.count }}</p>
          <v-icon @click="remove(v)">mdi-delete</v-icon>
        </div>
      </v-col>
      <!-- pc end -->
      <!-- mobile -->
      <v-col cols="12" sm="10" class="d-block d-md-none pa-1">
        <div class="weight-subtitle-word bfont lightbgcolor pa-5 text-center">
          您的購物車
        </div>
        <div
          v-for="(v, i) in items"
          :key="i"
          class="mt-5 pb-2 align-center text-center justify-space-between itemdetail"
        >
          <v-row
            justify="space-between"
            align="center"
            class="ma-0 pb-2 itemdetail"
          >
            <v-img
              :src="require(`~/assets/${v.src}.jpg`)"
              height="100"
              max-width="180"
            ></v-img>
            <div class="text-left weight-content-word">
              <p class="mb-0">{{ v.name }}</p>
              <p class="mb-0">NT$ {{ v.price }}</p>
            </div>
          </v-row>
          <v-row justify="space-between" align="center" class="ma-0 pt-2">
            <div class="d-flex">
              <v-btn text outlined tile small height="50" @click="increase(v)"
                >-</v-btn
              >
              <input
                type="text"
                :value="v.count"
                class="text-center"
                disabled
              />
              <v-btn text outlined tile small height="50" @click="crease(v)"
                >+</v-btn
              >
            </div>
            <p class="mb-0 weight-header-word">NT$ {{ v.price * v.count }}</p>
            <v-icon @click="remove(v)">mdi-delete</v-icon>
          </v-row>
        </div>
      </v-col>
      <!-- mobile end-->
      <v-col cols="12" sm="10" md="4" class="text-center pa-5">
        <div class="pa-5 weightbgcolor light-content-word mr-0">
          <p class="light-subtitle-word">訂單摘要</p>
          <hr />
          <div class="pa-5 mt-5">
            <v-row justify="space-between">
              <span>小計</span>
              <span>NT$ {{ total }}</span>
            </v-row>
            <v-row justify="space-between" class="mt-5">
              <span>運費</span>
              <span>NT$ {{ text }}</span>
            </v-row>
            <v-row justify="space-between" class="light-header-word bfont mt-8">
              <span>總計</span>
              <span>NT$ {{ total + text }}</span>
            </v-row>
          </div>
        </div>
        <v-btn
          class="checkbtn"
          height="56"
          width="100%"
          text
          tile
          to="/checkout"
        >
          結帳
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    // items: [],
    // total: 0,
    text: 300,
  }),
  // mounted: function () {
  //   this.items = this.$store.state.cart.cartitems;
  //   this.total = this.$store.state.cart.total;
  // },
  computed: {
    ...mapState({
      items: (state) => state.cart.cartitems,
      total: (state) => state.cart.total,
    }),
  },
  methods: {
    crease(item) {
      const param = {
        id: item.id,
        operate: "++",
      };
      this.$store.commit("cart/COUNT", param);
    },
    increase(item) {
      const param = {
        id: item.id,
        operate: "--",
      };
      this.$store.commit("cart/COUNT", param);
    },
    remove(item) {
      this.$store.commit("cart/DELETE", item.id);
    },
  },
};
</script>
<style lang="scss" scoped>
.itemdetail {
  border-bottom: $lightborder;
  .v-btn {
    border: $lightborder !important;
  }
  input {
    width: 60px;
    height: 50px;
    border: $lightborder;
  }
  i {
    color: $weightcolor !important;
  }
}
</style>
