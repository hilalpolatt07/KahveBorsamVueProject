<template>
    <q-page class="bg-brown-8 window-height window-width row justify-center items-center">
        <div class="column">
            <div class="row justify-center">
                <h5 class="text-center text-white text-bold">Kayıt ol</h5>
            </div>
            <div class="row">
                <q-card square bordered class="q-pa-lg shadow-1">
                    <img class="q-mx-auto" style="width: 100px;" src="../assets/navbar/kahveborsasi.png">


                    <q-card-section>
                        <q-form class="q-gutter-md">
                            <q-input square filled clearable v-model="userData.email" type="email" label="Email" />
                            <q-input square filled clearable v-model="userData.password" type="password" label="Şifre" />
                            <q-input square filled clearable v-model="userData.password2" type="password"
                                label="Şifre tekrarı" />

                        </q-form>
                    </q-card-section>
                    <q-card-actions class="q-px-md">
                        <q-btn @click="createUser(userData)" unelevated color="brown-8" size="lg" class="full-width"
                            label="Kayıt ol" />
                    </q-card-actions>
                    <q-card-section class="text-center q-pa-none">
                        <p class="text-grey-6">Hesabım var,<router-link :to="{ path: '/login' }"> <span
                                    class="text-bold text-grey-8">giriş yap</span> </router-link></p>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </q-page>
</template>


<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { mapState, mapActions } from 'pinia';
import { authStore } from '@/stores';


export default defineComponent({
    setup() {
        const state = reactive({
            userData: {
                email: "",
                password: "",
                password2: ""
            }

        });
        return { ...toRefs(state) };
    },

    methods: {
        //@ts-ignore
        async createUser(userData) {

            this.setRegister(userData)

            setTimeout(() => {
                if (this.getRegisterCheck) {
                    //@ts-ignore
                    this.$router.push({ path: "/login" })
                }
            }, 1500);
        },

        ...mapActions(authStore, ["setRegister"])
    },

    computed: {
        ...mapState(authStore, ["getRegisterCheck"])
    },


})
</script>