<template>
  <v-main>
    <div class="pa-5 weightbgcolor">
      <v-row class="pl-5 pr-5 mt-8">
        <v-col class="pb-0">
          <p class="light-header-word bfont">電子郵件信箱</p>
          <v-text-field
            v-model="email"
            class="pa-0"
            background-color="#eaf0ed"
            height="50"
            placeholder="example@gmail.com"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row class="pl-5 pr-5 mt-0">
        <v-col class="pb-0">
          <p class="light-header-word bfont">統一編號（選填）</p>
          <v-text-field
            v-model="num"
            class="pa-0"
            background-color="#eaf0ed"
            height="50"
            placeholder="12345678"
          >
          </v-text-field>
        </v-col>
      </v-row>
    </div>
    <v-btn class="checkbtn" height="56" width="100%" text tile @click="sendata">
      下一步
    </v-btn>
  </v-main>
</template>
<script>
export default {
  data: () => ({
    type: "nopost",
    email: "",
    num: "",
  }),
  methods: {
    sendata() {
      const param = {
        type: this.type,
        email: this.email,
        num: this.num,
      };
      this.$store.commit("checkout/receiptinfo", param);
      alert("付款成功!");
      this.$store.commit("checkout/clear");
      this.$store.commit("cart/clear");
      this.$router.push("/success");
    },
  },
};
</script>
