<template>
  <v-main>
    <div class="pa-5 weightbgcolor">
      <v-row class="pl-5 pr-5 mt-0">
        <v-col>
          <v-row>
            <v-col class="d-flex justify-space-between align-center">
              <p class="light-header-word bfont">地址</p>
              <div class="d-flex light-content-word bfont align-center">
                <input
                  v-model="checkstate"
                  class="checkblock"
                  type="checkbox"
                />
                同運送地址
              </div>
            </v-col>
          </v-row>

          <v-row class="mt-0">
            <v-col class="pb-0">
              <v-text-field
                v-model="addr1"
                class="pa-0"
                background-color="#eaf0ed"
                height="50"
              >
              </v-text-field>
            </v-col>
            <v-col class="pb-0">
              <v-text-field
                v-model="addr2"
                class="pa-0"
                background-color="#eaf0ed"
                height="50"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-text-field
            v-model="addr3"
            class="pa-0"
            background-color="#eaf0ed"
            height="50"
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
    type: "post",
    // addr1: "",
    // addr2: "",
    // addr3: "",
    num: "",
    checkstate: false,
  }),
  computed: {
    addr1() {
      if (this.checkstate) {
        return this.$store.state.checkout.data.userinfo.addr1;
      }
      return "";
    },
    addr2() {
      if (this.checkstate) {
        return this.$store.state.checkout.data.userinfo.addr2;
      }
      return "";
    },
    addr3() {
      if (this.checkstate) {
        return this.$store.state.checkout.data.userinfo.addr3;
      }
      return "";
    },
  },
  methods: {
    sendata() {
      const param = {
        type: this.type,
        num: this.num,
        addr1: this.addr1,
        addr2: this.addr2,
        addr3: this.addr3,
      };
      this.$store.commit("checkout/receiptinfo", param);
      alert("付款成功!");
      this.$router.push("/success");
    },
  },
};
</script>
