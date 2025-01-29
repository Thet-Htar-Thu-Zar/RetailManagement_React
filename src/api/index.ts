import * as product from "./product/queries";
import * as sale from "./sale/queries";

class API {
  product: typeof product | undefined;
  sale: typeof sale | undefined;

  constructor() {
    this.product = product;
    this.sale = sale;
  }
}

const api = new API();

export default api;
