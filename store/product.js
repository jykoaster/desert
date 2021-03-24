export const state = () => ({
  products: [
    //{ name: "", price: "" }
  ],
});

export const actions = {
  async getitemsbyclass(a, { classid }) {
    return await this.$axios.$get("/product?classid=" + classid);
    // return data;
  },
  async getitems() {
    return await this.$axios.$get("/product");
  },
};
