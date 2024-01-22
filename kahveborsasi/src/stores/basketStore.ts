import { db } from "@/firebase";
import Product from "@/types/Product";
import { arrayUnion, collection, getDocs, query, updateDoc,doc,where } from "firebase/firestore";
import { defineStore } from "pinia";

export const basketStore = defineStore("basket", {
  state: () => ({
    basketList: [] as Product[],
  }),

  actions: {

    async addToBasket(product: Product, email: String) {
      //@ts-ignore
      const targetDB = doc(db, "users", email);

      await updateDoc(targetDB, {
        basket: arrayUnion(product),
      });
    },


    async setBasketList(email:String) {
      const q = query(
        collection(db, "users"),
        //@ts-ignore
        where("email", "==", email)
      );
      const basket = await getDocs(q);
      basket?.forEach((doc) => {
        const dbBasket = [] as Product[];

        dbBasket.push(doc.data().basket);

        dbBasket.forEach((item) => {
          //@ts-ignore
          item?.forEach((item) => {
            this.basketList.push(item);
            console.log(item);
            
          });
        });
      });
    },

    clearBasketList() {
      this.basketList = [];
    },
  },

  getters:{
    getBasketList(state){
      return state.basketList
    }
  }
});

export default basketStore;
