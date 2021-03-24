<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="7" lg="5">
        <v-main>
          <div class="pa-5 weightbgcolor">
            <v-row class="pl-5 pr-5" justify="space-between" align="center">
              <p class="mb-0 pa-3 title-word">{{ allinfo.name }}</p>
              <div class="stepper pa-3">
                <v-stepper :value="`${allinfo.idx}`">
                  <v-stepper-header>
                    <v-stepper-step
                      step="1"
                      color="#eaf0ed"
                      :complete="allinfo.idx > 1"
                    >
                    </v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step
                      step="2"
                      color="#eaf0ed"
                      :complete="allinfo.idx > 2"
                    ></v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step step="3" color="#eaf0ed"> </v-stepper-step>
                  </v-stepper-header>
                </v-stepper>
              </div>
            </v-row>
          </div>
          <nuxt-child> </nuxt-child>
        </v-main>
        <!-- <v-btn
          class="checkbtn"
          height="56"
          width="100%"
          text
          tile
          :to="`${allinfo.path}`"
          @click="senddata"
        >
          下一步
        </v-btn> -->
      </v-col>
      <v-col cols="12" sm="4" lg="3">
        <div class="checkouttotal">
          <div class="checkouttitle mid-subtitle-word bfont text-center pa-4">
            <p class="mb-0">訂單摘要</p>
          </div>
          <div class="pa-8 checkoutcount">
            <v-row justify="space-between">
              <span>小計</span>
              <span>NT$ {{ total }}</span>
            </v-row>
            <v-row justify="space-between" class="mt-5">
              <span>運費</span>
              <span>NT$ {{ text }}</span>
            </v-row>
            <v-row
              justify="space-between"
              class="medium-header-word bfont mt-8"
            >
              <span>總計</span>
              <span>NT$ {{ total + text }}</span>
            </v-row>
          </div>
        </div>
        <div class="checkoutlist mid-subtitle-word bfont mt-5 light-border">
          <div class="checkouttitle text-center pa-4">
            <p class="mb-0">購物清單</p>
          </div>
          <div
            v-for="(v, i) in cartitems"
            :key="i"
            class="d-flex pa-3 align-center justify-center"
          >
            <v-col cols="6" class="pa-0">
              <v-img
                :src="require(`~/assets/${v.src}.jpg`)"
                height="80"
                max-width="120"
              ></v-img>
            </v-col>
            <v-col cols="6" class="text-center mid-content-word itemname pa-0">
              <p class="mb-0">{{ v.name }}</p>
              <p class="mb-0">NT$ {{ v.price }}</p>
            </v-col>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    pageinfo: [
      { idx: 1, page: "transport", name: "運送" },
      { idx: 2, page: "credit", name: "付款" },
      { idx: 3, page: "receipt", name: "發票" },
    ],
    text: 300,
  }),

  computed: {
    allinfo() {
      switch (this.$route.path) {
        case "/checkout":
          return this.pageinfo[0];
        case "/checkout/credit":
          return this.pageinfo[1];
        case "/checkout/receipt/nopost":
        case "/checkout/receipt/post":
          return this.pageinfo[2];
        default:
          return this.pageinfo[0];
      }
    },
    ...mapState({
      total: (state) => state.cart.total,
      cartitems: (state) => state.cart.cartitems,
    }),
  },
};
</script>
<style lang="scss" scoped>
.checkoutcount {
  border: $lightborder;
  color: $midcolor;
}
.checkouttitle {
  background-color: $lightcolor;
}
.checkoutlist {
  color: $midcolor;
}
.v-divider {
  border-color: $lightcolor !important;
}

.v-stepper {
  background-color: transparent !important;
  color: $weightcolor !important;
}
.v-stepper__step__step {
  color: $weightcolor !important;
  background-color: $lightcolor !important;
  .v-icon {
    color: $weightcolor !important;
  }
}
</style>
<style lang="scss"></style>
