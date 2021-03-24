import axios from "@nuxtjs/axios";
export function product() {
  let a = axios.get("/product");
}

export default {};
