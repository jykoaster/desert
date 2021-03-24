import VuexPersistence from "vuex-persist";

export const state = () => ({
  cartitems: [
    //{ id:"", name: "", count: "", price: "" }
  ],
  total: 0,
  plugins: [new VuexPersistence().plugin],
});

export const mutations = {
  SET_ITEM(state, param) {
    let a = state.cartitems.find((element) => element.name == param.name);
    if (a) {
      a.count += param.count;
    } else {
      state.cartitems.push(param);
    }
    state.total += param.count * param.price;
  },
  COUNT(state, { id, operate }) {
    let a = state.cartitems.find((element) => element.id == id);
    if (operate == "++") {
      a.count++;
      state.total += parseInt(a.price);
    } else if (operate == "--" && a.count > 1) {
      a.count--;
      state.total -= parseInt(a.price);
    }
  },
  DELETE(state, id) {
    let a = state.cartitems.find((element) => element.id == id);
    state.total -= a.price * a.count;
    state.cartitems.splice(state.cartitems.indexOf(a), 1);
  },
  clear(state) {
    state.cartitems = [];
    state.total = 0;
  },
};
