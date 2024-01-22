<template>
    <div class="navbar-bg ">
        <div class="row">
            <div class="col-2"></div>
            <div class="col-8 q-py-sm ">
                <NavbarBadge />
                <div class=" row items-center ">
                    <img style="width: 200px;" src="../assets/navbar/kahveborsasi.png">
                    <div class="row q-ml-lg">
                        <div class="col q-mr-lg">
                            <a href="#"><img class="wp-icon" src="../assets/navbar/whatsapp.png" alt=""></a>
                        </div>
                        <div class="col-9 q-ml-md ">
                            <span class="text-yellow">WhatsApp</span><br />
                            <span class="text-white">0504 123 45 67</span>
                        </div>
                    </div>
                    <div class="navbar-search  col-5">
                        <input placeholder="Arama" type="text">
                        <a href="#"><img class="navbar-icon" src="../assets/navbar/search.png" alt=""></a>
                    </div>

                    <div class="deneme">

                        <div>
                            <div v-if="isAuth == false">

                                <router-link :to="{ path: '/login' }"><img class="navbar-icon q-mr-lg"
                                        src="../assets/navbar/user.png" alt=""></router-link>
                            </div>
                            <div class="row" v-if="isAuth == true">
                                
                                <router-link class="text-decoration-none" :to="{ path: '/basket' }">

                                    <a href="#"><img class="navbar-icon " src="../assets/navbar/basket.png" alt=""></a>
                                </router-link>
                                <q-btn @click="logout" rounded color="red" class="text-weight-bold q-ml-lg"
                                    text-color="black" label="Çıkış Yap" />

                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div class="col-2">

            </div>
        </div>


    </div>
</template>

<script lang="ts">

import NavbarBadge from "../components/NavbarBadge.vue"
import { defineComponent } from 'vue';

import { mapState, mapActions } from 'pinia';
import { authStore } from "@/stores/index"

export default defineComponent({

    methods: {

        logout() {
            this.setUser(null)
        },

        ...mapActions(authStore, ["setUser"])
    },

    computed: {
        ...mapState(authStore, ["isAuth"])
    },

    components: { NavbarBadge }
})
</script>