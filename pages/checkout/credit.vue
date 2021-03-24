<template>
  <v-main>
    <div class="pa-5 weightbgcolor">
      <v-row class="pl-5 pr-5">
        <v-col class="pb-0">
          <p class="light-header-word bfont">信用卡卡號</p>
          <v-text-field
            v-model="num"
            placeholder="xxxx-xxxx-xxxx-xxxx"
            class="pa-0"
            background-color="#eaf0ed"
            height="50"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row class="pl-5 pr-5 mt-0">
        <v-col class="pb-0">
          <p class="light-header-word bfont">持卡人姓名</p>
          <v-row>
            <v-col class="pb-0">
              <v-text-field
                v-model="firstname"
                class="pa-0"
                background-color="#eaf0ed"
                height="50"
              >
              </v-text-field>
            </v-col>
            <v-col class="pb-0">
              <v-text-field
                v-model="lastname"
                class="pa-0"
                background-color="#eaf0ed"
                height="50"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row class="pl-5 pr-5">
        <v-col class="pb-0">
          <p class="light-header-word bfont">有效期限</p>
          <v-row>
            <v-col class="pb-0">
              <v-text-field
                v-model="month"
                placeholder="yy"
                class="pa-0"
                background-color="#eaf0ed"
                height="50"
              >
              </v-text-field>
            </v-col>
            <v-col class="pb-0">
              <v-text-field
                v-model="year"
                placeholder="mm"
                class="pa-0"
                background-color="#eaf0ed"
                height="50"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="pl-5 pr-5">
        <v-col cols="6">
          <p class="light-header-word bfont">安全碼</p>
          <v-text-field
            v-model="code"
            placeholder="xxx"
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
    num: "",
    firstname: "",
    lastname: "",
    year: "",
    month: "",
    code: "",
  }),
  methods: {
    sendata() {
      const param = {
        num: this.num,
        firstname: this.firstname,
        lastname: this.lastname,
        year: this.year,
        month: this.month,
        code: this.code,
      };
      this.$store.commit("checkout/cardinfo", param);
      this.$router.push("/checkout/receipt");
    },
  },
};
</script>
