<template>
  <q-page class="bg-brown-8 window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row justify-center">
        <h5 class="text-center text-white text-bold">Giriş Yap</h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <img class="q-mx-auto" style="width: 100px;" src="../assets/navbar/kahveborsasi.png">

          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input square filled clearable v-model="userData.email" type="email" label="Email" />
              <q-input square filled clearable v-model="userData.password" type="password" label="Şifre" />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn @click="login(userData)" unelevated color="brown-8" size="lg" class="full-width" label="Giriş yap" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">Hesabım yok, <router-link :to="{ path: '/register' }"> <span
                  class="text-bold text-grey-8">kayıt ol</span> </router-link></p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { authStore } from "@/stores/index"
import { mapActions, mapState } from 'pinia';


export default defineComponent({

  setup() {

    const state = reactive({
      userData: {
        email: "",
        password: ""
      }
    })
    return { ...toRefs(state) }
  },

  methods: {
    //@ts-ignore
    async login(userData) {

      

      this.setLogin(userData).then(() => {

        if (this.getUser !== null) {
          //@ts-ignore
          this.$router.push({ path: '/' })
        }

      })

    },

    ...mapActions(authStore, ["setUser", "setLogin"])
  },

  computed: {
    ...mapState(authStore, ["getUser"])
  },

  components: {}
})
</script>