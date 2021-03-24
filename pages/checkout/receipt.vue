<template>
  <v-main>
    <div class="pl-5 pr-5 weightbgcolor">
      <v-row class="pl-5 pr-5 receipt">
        <v-col cols="12" class="d-flex">
          <v-btn-toggle
            active-class="lightbgcolor weight-header-word bfont"
            tile
            background-color="#3f5d45"
            color="#eaf0ed"
            style="border: 1px solid #eaf0ed"
          >
            <v-btn
              width="50%"
              class="light-border light-header-word bfont"
              text
              to="/checkout/receipt/nopost"
            >
              電子發票
            </v-btn>

            <v-btn
              width="50%"
              class="light-border light-header-word bfont"
              text
              to="/checkout/receipt/post"
            >
              郵寄發票
            </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
    </div>
    <v-main>
      <nuxt />
    </v-main>
  </v-main>
</template>
<style lang="scss" scoped>
.receipt {
  .v-btn--active::before {
    background-color: transparent !important;
  }
  .v-item-group {
    min-width: 100%;
  }
}
</style>
