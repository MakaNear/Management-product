import loadComponent from "../../helpers/loadComponent.js";
import { smoothScroll } from "../../helpers/smoothScroll.js";
import { url } from "../../helpers/urlConfig.js";
import  dataproduct  from "../management-product/table/dataproduct.js";

export async function main() {
  const promises = [
    loadComponent("header.topbar", url.components.topbar + "topbar.html"),
    loadComponent("aside.sidebar", url.components.sidebar + "sidebar.html"),
    loadComponent(".management-product .content", url.pages.managementProduct + "table/product.html"),
    loadComponent("footer.footer", url.components.footer + "footer.html"),
  ];

  Promise.all(promises)
    .then(() => {
      smoothScroll();
      dataproduct();
      console.log(url.components.topbar + "topbar.html");
      console.log(url.components.sidebar + "sidebar.html");
      console.log(url.pages.managementProduct + "product/product.html");
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}