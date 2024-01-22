import { db } from "@/firebase";
import Product from "@/types/Product";
import { collection, getDocs } from "firebase/firestore";
import { defineStore } from "pinia";

export const productStore = defineStore("product", {
  state: () => ({
    productList: [] as Product[],
  }),

  actions: {
    async setProductList() {
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
        this.productList.push(doc.data() as Product);
      });
    },
    clearProductList() {
      this.productList = [];
    },
  },
  getters: {
    getProductList(state) {
      return state.productList;
    },
  },
});

export default productStore;
