<template>
  <v-container id="loginpage">
    <v-row justify="center" align="center">
      <div>
        <div class="loginform text-center pa-10">
          <h1>會員登入</h1>
          <v-text-field
            class="d-flex align-center mr-auto ml-auto mt-10 pt-5"
            placeholder="電子信箱/手機號碼"
          >
            <template slot="prepend-inner">
              <div class="d-flex align-center">
                <v-icon class="ml-5">mdi-account</v-icon>
              </div>
            </template>
          </v-text-field>
          <v-text-field
            class="d-flex align-center mr-auto ml-auto mt-5 pt-5"
            placeholder="使用者密碼"
          >
            <template slot="prepend-inner">
              <div class="d-flex align-center">
                <v-icon class="ml-5">mdi-key</v-icon>
              </div>
            </template>
          </v-text-field>
          <div class="d-flex mt-5 align-center">
            <input class="checkblock" type="checkbox" />
            記住我
          </div>
        </div>
        <v-btn class="checkbtn" height="56" width="400" text tile>
          登入帳號
        </v-btn>
      </div>
      <div class="sociallogin text-center pa-10">
        <p>—— 連結社群帳號 ——</p>
        <v-btn class="mt-5" height="56" width="320" text tile>
          <v-img
            :src="require('~/assets/ic-facebook-logotype.svg')"
            max-width="110"
            height="21"
          ></v-img>
        </v-btn>
        <v-btn class="mt-5" height="56" width="320" text tile>
          <v-img
            :src="require('~/assets/ic-google.svg')"
            max-width="105"
            height="34"
          ></v-img>
        </v-btn>
        <v-btn class="mt-5" height="56" width="320" text tile>
          <v-img
            :src="require('~/assets/ic-yahoo.svg')"
            max-width="120"
            height="27"
          ></v-img>
        </v-btn>
      </div>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
#loginpage {
  margin-bottom: 80px;
}
.loginform {
  width: 400px;
  background-color: $weightcolor;
  font-weight: bold;
  color: $lightcolor;
  h1 {
    font-size: 40px;
  }
  i {
    color: $weightcolor !important;
  }
  .v-text-field {
    background-color: $lightcolor;
    width: 320px;
    height: 56px;
  }
}
.sociallogin {
  width: 400px;
  height: 380px;
  background-color: $lightcolor;
  color: $midcolor;
  .v-btn {
    background-color: #fff;
  }
  p {
    font-size: 24px;
  }
}
</style>
