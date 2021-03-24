<template>
  <v-app>
    <div id="navwrap">
      <div id="nav">
        <v-container>
          <v-row justify="center" align="center">
            <v-col
              ><v-img
                :src="require('~/assets/logo-all-dark.svg')"
                max-height="40"
                max-width="220"
              ></v-img
            ></v-col>
            <v-col class="d-flex justify-end navbtns pa-0">
              <v-btn text to="/" nuxt>首頁</v-btn>
              <v-btn text to="/product/all" nuxt>甜點</v-btn>
              <v-btn text to="/login" nuxt>登入</v-btn>
              <v-btn text to="/cart" nuxt><v-icon>mdi-cart</v-icon></v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <v-main>
      <nuxt />
    </v-main>
    <div class="footer mt-5">
      <v-row justify="center" class="weightbgcolor ma-0 pt-2 pb-2">
        <v-container
          class="d-md-flex d-block justify-space-between align-center"
        >
          <div class="d-flex justify-center align-center mb-5 mb-md-0">
            <v-img
              :src="require('~/assets/logo-light.svg')"
              max-height="40"
              max-width="40"
              class="mr-5"
            ></v-img>
            <p class="light-subtitle-word">訂閱你我的甜蜜郵件</p>
          </div>
          <div
            class="mail-contact d-flex align-center justify-center ma-auto ma-md-0"
          >
            <v-text-field class="d-flex align-center">
              <template slot="prepend-inner">
                <div class="d-flex align-center">
                  <v-icon class="ml-5">mdi-email</v-icon>
                </div>
              </template>
            </v-text-field>
            <v-btn height="56" text tile>
              <v-icon> mdi-arrow-right</v-icon>
            </v-btn>
          </div>
        </v-container>
      </v-row>
      <v-row justify="center" class="lightbgcolor ma-0">
        <v-container class="d-block d-md-flex justify-space-between">
          <v-col class="d-flex align-start flex-column pa-0">
            <v-col class="d-block d-md-flex justify-start mt-5 pa-0">
              <v-img
                :src="require('~/assets/logotype-lg-dark.svg')"
                max-height="30"
                max-width="200"
              ></v-img>
            </v-col>
            <v-col class="pa-0 mt-5">
              <v-col class="pa-0">
                <p class="weight-content-word">
                  07-1234-5678 <br />
                  sweetaste@email.com<br />
                  800 高雄市新興區幸福路 520 號
                </p>
              </v-col>
            </v-col>
            <v-col class="d-flex pa-0 mt-5 align-center">
              <v-img
                :src="require('~/assets/ic-line@.svg')"
                max-height="30"
                max-width="30"
                class="mr-1"
              ></v-img>
              <v-img
                :src="require('~/assets/ic-facebook.svg')"
                max-height="30"
                max-width="30"
              ></v-img>
            </v-col>
          </v-col>
          <v-col class="align-end flex-column pa-0">
            <v-col class="d-none d-md-flex justify-end">
              <v-img
                :src="require('~/assets/sm-今天是個吃甜點的好日子.svg')"
                max-height="220"
                max-width="60"
              ></v-img>
            </v-col>
            <v-col
              class="d-flex justify-start justify-md-end align-center weight-content-word pa-0 mt-5"
            >
              <p>© 2018 Sweetaste* All Rights Reserved</p>
            </v-col>
          </v-col>
        </v-container>
      </v-row>
    </div>
  </v-app>
</template>
<script>
export default {
  middleware: ["redirect"],
};
</script>
<style lang="scss" scoped>
#navwrap {
  height: 100px;
}
#nav {
  background-color: #fff;
  height: 100px;
  width: 100%;
  position: fixed;
  z-index: 10;
}

.navbtns {
  height: 100px;
  .v-btn {
    height: 100px !important;
    width: 100px;
    font-size: 16px !important;
    font-weight: bold;
    color: $weightcolor;
    i {
      color: $weightcolor !important;
    }
    a {
      color: $weightcolor;
      text-decoration: none;
    }
  }
}
.footer {
  @media (min-width: 1264px) {
    .container {
      padding-right: 150px;
      padding-left: 150px;
    }
  }
  @media (max-width: 960px) {
    .container {
      width: 600px;
    }
  }
  @media (max-width: 424px) {
    .container {
      width: 320px;
    }
  }
}
.mail-contact {
  @media (max-width: 424px) {
    width: 280px;
  }
  background-color: $lightcolor;
  width: 400px;
  height: 56px;
  .v-icon {
    color: $weightcolor !important;
  }
  .v-btn {
    background-color: $btncolor;
    color: $weightcolor !important;
  }
}
</style>

<style lang="scss">
.v-input__slot {
  &:before {
    border: 0px !important;
  }
  &:after {
    border: 0px !important;
  }
}
</style>
