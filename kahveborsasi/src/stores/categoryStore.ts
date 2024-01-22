import { db } from "@/firebase";
import { DocumentData, collection, getDocs } from "firebase/firestore";
import { defineStore } from "pinia";

export const categoryStore = defineStore("category", {
  state: () => ({
    categoryList: [] as DocumentData[],
  }),

  actions: {
    async setCategoryList() {
      const querySnapshot = await getDocs(collection(db, "categories"));
      querySnapshot.forEach((doc) => {
        this.categoryList.push(doc.data() as DocumentData);
      });
    },
    clearCategoryList(){
      this.categoryList = []
    }
  },

  getters: {
    getCategoryList(state) {
      return state.categoryList;
    },
  },
});

export default categoryStore;
