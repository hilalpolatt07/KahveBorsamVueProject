import { db } from "@/firebase";
import { DocumentData, collection,getDocs } from "firebase/firestore";
import { defineStore } from "pinia";

export const textStore = defineStore("text", {
  state: () => ({
    textList: [] as DocumentData[],
  }),

  actions:{

    async setTextList(){
        const querySnapshot = await getDocs(collection(db, "texts"));
        querySnapshot.forEach((doc) => {
            this.textList.push(doc.data())
        });

    },

    clearTextList(){
        this.textList = []
    }

  },

  getters:{

    getTextList(state){
        return state.textList;
    }

  }
});

export default textStore;
