<template>
    <div class="col">

        <NavbarBottom />

        <div class="row">
            <div class="col-2"></div>
            <div class="col-8 ">
                <h4 class="text-center text-weight-bold">Taksitli ve Toptan Kahve</h4>
                <div class="row">
                    <div class="col-3">
                        <CategoryList />
                    </div>
                    <div class="col-8 q-pl-lg">
                        <CarouselComponent />
                        
                    </div>
                </div>

                

                

            </div>
            <div class="col-2"></div>
        </div>




    </div>
</template>

<script lang="ts">

import NavbarBottom from "../components/NavbarBottom.vue"
import CarouselComponent from "../components/CarouselComponent.vue"
import { defineComponent, ref } from 'vue';
import CategoryList from "./CategoryList.vue";

export default defineComponent({

    setup() {
        return {
            slide: ref(1)
        }
    },

    components: { NavbarBottom, CategoryList, CarouselComponent }
})
</script>