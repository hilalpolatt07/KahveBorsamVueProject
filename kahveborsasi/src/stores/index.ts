import Product  from '@/types/Product';
import { db } from "@/firebase";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { defineStore } from "pinia";

export const authStore = defineStore("auth", {
  state: () => ({
    user: null,
    isSuccess: false,
  }),
  actions: {
    //@ts-ignore
    setUser(user) {
      this.user = user;
    },

    //@ts-ignore
    async setRegister(userData) {
      if (
        userData.password != null &&
        userData.password == userData.password2
      ) {
        const data = {
          ...userData,
          basket: [],
        };
        delete data.password2;

        const userId = Math.floor(Math.random() * 10000) + 1;

        await setDoc(doc(db, "users", data.email), {
          userId: userId,
          ...data,
        });

        this.isSuccess = true;
      }
    },

    //@ts-ignore
    async setLogin(userData) {
      let user = {
        ...userData,
      };

      const docRef = doc(db, "users", user.email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        if (user.password !== docSnap.data().password) {
          alert("Şifre hatalı");
        } else {
          user = docSnap.data();
          delete user.password;
          this.setUser(user);
        }
      } else {
        alert("Böyle bir hesap yok");
      }
    },

  },
  getters: {
    isAuth(state) {
      return state.user !== null;
    },

    getUser(state) {
      return state.user;
    },

    getRegisterCheck(state){
        return state.isSuccess;
    }
  },
});
