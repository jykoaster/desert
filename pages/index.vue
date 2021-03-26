<template>
  <v-main id="homepage">
    <v-container class="pa-0">
      <v-row justify="center" class="ma-0">
        <v-img
          :src="require('~/assets/annie-spratt-133872-unsplash.jpg')"
          max-height="500"
          max-width="100%"
          class="ma-auto"
        >
        </v-img>
      </v-row>
      <v-row id="area1" justify="center" class="ma-0">
        <v-col
          v-for="(v, i) in cards"
          :key="i"
          cols="4"
          md="3"
          class="pa-0 tag-header text-center"
        >
          <v-hover>
            <template #default="{ hover }">
              <v-card class="weight-bolder" :to="`${v.path}`" tile>
                <v-img :src="require(`~/assets/${v.src}.jpg`)" :height="height">
                </v-img>
                <v-overlay
                  v-show="!hover"
                  absolute
                  color="#3f5d45"
                  opacity="0.8"
                >
                  {{ v.name }}
                </v-overlay>
                <v-overlay
                  v-show="hover"
                  absolute
                  color="#ffe180"
                  opacity="0.8"
                >
                  {{ v.name }}
                </v-overlay>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
    <!-- area2 pc -->
    <div id="area2" class="d-none d-md-flex">
      <v-container>
        <v-row justify="space-between" class="ma-0">
          <v-col cols="5" class="align-center">
            <v-img
              max-height="450"
              :src="require('~/assets/le-buzz-576478-unsplash.jpg')"
            ></v-img>
          </v-col>
          <v-col cols="5" class="d-flex article-content">
            <p>
              青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
            </p>
            <br />
            <p>
              是非成敗轉頭空，青山依舊在，幾度夕陽紅。白髮漁樵江渚上，古今多少事，都付笑談中。
            </p>
          </v-col>
          <v-img
            :src="require('~/assets/lg-為什麼選擇了做甜點.svg')"
            max-width="89"
            class="ma-auto"
          ></v-img>
        </v-row>
        <div></div>
      </v-container>
    </div>
    <!-- area2 pc end -->
    <!-- area2 mobile -->
    <div class="mt-5 d-block d-md-none">
      <v-row justify="center" class="pa-5 ma-0 d-flex">
        <v-img
          max-width="280"
          :src="require('~/assets/sm-為什麼選擇了做甜點.svg')"
        ></v-img>
      </v-row>
      <v-row class="ma-0">
        <v-img
          max-width="100%"
          max-height="250"
          :src="require('~/assets/le-buzz-576478-unsplash.jpg')"
        ></v-img>
      </v-row>
      <v-row class="pa-5 lightbgcolor ma-0 mid-content-word">
        <p>
          青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
        </p>
        <br />
        <p>
          是非成敗轉頭空，青山依舊在，幾度夕陽紅。白髮漁樵江渚上，古今多少事，都付笑談中。
        </p>
      </v-row>
    </div>
    <!-- area2 mobile end-->
    <!-- area3 pc -->
    <div id="area3" class="d-none d-md-flex">
      <v-container>
        <v-row justify="space-between" class="ma-0">
          <v-img
            :src="require('~/assets/lg-為什麼一定要吃甜點.svg')"
            max-width="89"
            class="ma-auto"
          ></v-img>
          <v-col cols="5" class="d-flex article-content text-center">
            <p>
              青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
            </p>
            <br />
            <p>
              是非成敗轉頭空，青山依舊在，幾度夕陽紅。白髮漁樵江渚上，古今多少事，都付笑談中。
            </p>
          </v-col>
          <v-col cols="5" class="align-center">
            <v-img
              max-height="450"
              :src="require('~/assets/monika-grabkowska-325047-unsplash.jpg')"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- area3 pc  end-->
    <!-- area3 mobile -->
    <div class="mt-5 d-block d-md-none">
      <v-row justify="center" class="pa-5 ma-0 d-flex">
        <v-img
          max-width="280"
          :src="require('~/assets/sm-為什麼一定要吃甜點.svg')"
        ></v-img>
      </v-row>
      <v-row class="ma-0">
        <v-img
          max-width="100%"
          max-height="250"
          :src="require('~/assets/monika-grabkowska-325047-unsplash.jpg')"
        ></v-img>
      </v-row>
      <v-row class="pa-5 lightbgcolor ma-0 mid-content-word">
        <p>
          青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
        </p>
        <br />
        <p>
          是非成敗轉頭空，青山依舊在，幾度夕陽紅。白髮漁樵江渚上，古今多少事，都付笑談中。
        </p>
      </v-row>
    </div>
    <!-- area3 mobile end-->
    <!-- area4 pc -->
    <div id="area4">
      <v-container>
        <v-row justify="center" class="ma-0 mb-5">
          <v-img
            :src="require('~/assets/lg-想吃甜點是不需要理由的.svg')"
            max-width="89"
            class="ma-auto d-none d-md-flex"
          ></v-img>
          <v-img
            :src="require('~/assets/sm-想吃甜點是不需要理由的.svg')"
            max-width="280"
            class="ma-auto d-dlex d-md-none"
          ></v-img>
        </v-row>
      </v-container>
    </div>
    <!-- area4 pc end-->

    <v-container id="area5">
      <v-row class="ma-5 d-flex justify-md-space-between justify-center">
        <v-col
          v-for="(v, i) in area5"
          :key="i"
          class="d-flex justify-center"
          cols="12"
          md="3"
        >
          <v-card
            flat
            tile
            max-height="500"
            min-width="300"
            max-width="300"
            class="ma-auto"
          >
            <v-img
              :src="require(`~/assets/${v.src}.jpg`)"
              max-height="250"
              max-width="100%"
            >
            </v-img>
            <div class="d-flex text-center weight-header-word">
              <v-col cols="8" class="light-border">{{ v.name }}</v-col>
              <v-col cols="4" class="light-border">NT${{ v.price }}</v-col>
            </div>
            <v-card-actions class="text-center addcart" @click="addcart(v)">
              <v-card-text class="pa-2">加入購物車</v-card-text>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
export default {
  data: () => ({
    cards: [
      {
        name: "本日精選",
        src: "brooke-lark-230642-unsplash",
        path: "/product/1",
      },
      {
        name: "人氣推薦",
        src: "whitney-wright-356670-unsplash",
        path: "/product/2",
      },
      {
        name: "新品上市",
        src: "food-photographer-jennifer-pallian-306919-unsplash",
        path: "/product/3",
      },
    ],
    items: [
      { src: "heather-schwartz-493946-unsplash" },
      { src: "food-photographer-jennifer-pallian-650641-unsplash" },
      { src: "rezel-apacionado-362238-unsplash" },
    ],
    area5: [],
  }),
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 200;
        case "sm":
          return 200;
        default:
          return 250;
      }
    },
  },
  async mounted() {
    this.area5 = await this.$store.dispatch("product/getitemsbyclass", {
      classid: "1",
    });
  },

  methods: {
    addcart(item) {
      const param = {
        id: item.id,
        name: item.name,
        price: item.price,
        count: 1,
        src: item.src,
      };
      this.$store.commit("cart/SET_ITEM", param);
      alert("加入購物車成功");
    },
  },
};
</script>
<style lang="scss" scoped>
#homepage {
  width: 100%;
}

.article-content {
  p {
    @extend .mid-content-word;
    margin: 2em 2em 2em 2em !important;
    line-height: 32px;
    writing-mode: vertical-lr;
  }
}

#area1 {
  .tag-header {
    @include mobile {
      margin-top: 0px;
    }
    margin-top: -80px;
    z-index: 2;
  }
  .v-overlay {
    font-size: 24px;
    writing-mode: vertical-lr;
    letter-spacing: 3px;

    &:hover {
      color: $weightcolor;
      font-weight: bold;
      cursor: pointer;
    }
  }
  .v-image {
    filter: blur(5px);
  }
}

#area2,
#area3 {
  margin-top: 150px;
  background-color: $lightcolor;

  .col {
    height: 400px;
    .v-image {
      margin-top: -40px;
    }
  }
}
#area4 {
  margin-top: 100px;
}
</style>
