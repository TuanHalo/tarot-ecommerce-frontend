import { api, PRODUCT_API } from "@/config/api";

export const productService = {
  getAll(query: string) {
    return api.get(`${PRODUCT_API}/?${query}`);
  },

  getDetail(id: string) {
    return api.get(`${PRODUCT_API}/${id}`);
  },
};
