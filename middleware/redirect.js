export default function ({ route, redirect }) {
  if (route.fullPath === "/checkout/receipt") {
    return redirect("/checkout/receipt/nopost");
  }
  if (route.fullPath === "/product") {
    return redirect("/product/all");
  }
}
