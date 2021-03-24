export const state = () => ({
  data: {},
});

export const mutations = {
  userinfo(state, param) {
    state.data.userinfo = param;
  },
  cardinfo(state, param) {
    state.data.cardinfo = param;
  },
  receiptinfo(state, param) {
    state.data.receiptinfo = param;
  },
  clear(state) {
    state.data = {};
  },
};
