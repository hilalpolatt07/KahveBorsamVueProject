<template>
    <div class="navbar-bg">
        <div class="row">
            <div class="col-2"></div>

            <div class="col-8 q-py-sm ">
                <NavbarBadge />
                <div class="row items-center ">
                    <img style="width: 200px;" src="../assets/navbar/kahveborsasi.png" >
                    <div class="navbar-search q-mx-lg col-5">
                        <input placeholder="Arama" type="text">
                        <q-separator vertical />
                        <span class="q-px-sm items-end">Tüm Kategoriler</span>
                        <q-separator vertical />
                        <a href="#"><img class="navbar-icon" src="../assets/navbar/search.png" alt=""></a>
                    </div>
                    <div class="row q-ml-lg">
                        <div class="col q-mr-lg">
                            <a href="#"><img class="wp-icon" src="../assets/navbar/whatsapp.png" alt=""></a>
                        </div>
                        <div class="col-9 q-ml-md ">
                            <span class="text-yellow">WhatsApp</span><br/>
                            <span class="text-white">0504 123 45 67</span>
                        </div>

                        
                    </div>
                    <div class="deneme">
                        
                        <div>
                            <a href="#"><img class="navbar-icon " src="../assets/navbar/user.png" alt=""></a>
                            <a href="#"><img class="navbar-icon " src="../assets/navbar/basket.png" alt=""></a>
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

export default defineComponent({

    components: { NavbarBadge }
})
</script>