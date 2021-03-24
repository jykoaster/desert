<template>
  <v-main>
    <v-container class="successbanner">
      <v-img
        :src="require('~/assets/photo-1505935428862-770b6f24f629.jpg')"
        height="500px"
        class="align-center text-center"
      >
        <div class="stepper ma-auto">
          <v-stepper>
            <v-stepper-header>
              <v-stepper-step step="1" color="#3f5d45" complete>
              </v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step
                step="2"
                color="#3f5d45"
                complete
              ></v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="3" color="#3f5d45" complete>
              </v-stepper-step>
            </v-stepper-header>
          </v-stepper>
        </div>
        <p class="weight-title-word bfont">付款成功</p>
        <v-btn class="checkbtn mt-5" height="56" width="300" text tile to="/">
          再去逛逛
        </v-btn>
      </v-img>
    </v-container>
  </v-main>
</template>
<style lang="scss" scoped>
.v-divider {
  border-color: $weightcolor !important;
}
.v-stepper__step__step {
  color: $lightcolor !important;
  background-color: $weightcolor !important;
  .v-icon {
    color: $lightcolor !important;
  }
}
.v-stepper {
  background-color: transparent !important;
}
</style>
