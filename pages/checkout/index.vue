<template>
  <v-main>
    <div class="pa-5 weightbgcolor">
      <v-row class="pl-5 pr-5">
        <v-col class="pb-0">
          <p class="light-header-word bfont">姓氏</p>
          <v-text-field
            v-model="firstname"
            class="pa-0"
            background-color="#eaf0ed"
            height="50"
          >
          </v-text-field>
        </v-col>
        <v-col class="pb-0">
          <p class="light-header-word bfont">名字</p>
          <v-text-field
            v-model="lastname"
            class="pa-0"
            background-color="#eaf0ed"
            height="50"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row class="pl-5 pr-5 mt-0">
        <v-col class="pb-0">
          <p class="light-header-word bfont">電話</p>
          <v-text-field
            v-model="phone"
            class="pa-0"
            background-color="#eaf0ed"
            height="50"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row class="pl-5 pr-5 mt-0">
        <v-col>
          <p class="light-header-word bfont">地址</p>
          <v-row>
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
    </div>
    <v-btn class="checkbtn" height="56" width="100%" text tile @click="sendata">
      下一步
    </v-btn>
  </v-main>
</template>
<script>
export default {
  data: () => ({
    firstname: "",
    lastname: "",
    phone: "",
    addr1: "",
    addr2: "",
    addr3: "",
  }),
  methods: {
    sendata() {
      const param = {
        name: this.firstname + " " + this.lastname,
        phone: this.phone,
        addr1: this.addr1,
        addr2: this.addr2,
        addr3: this.addr3,
      };
      this.$store.commit("checkout/userinfo", param);
      this.$router.push("/checkout/credit");
    },
  },
};
</script>
