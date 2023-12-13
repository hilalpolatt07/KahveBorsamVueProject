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

                <div class="row q-my-lg justify-center text-weight-bold ">

                    <FeatureComponent />

                </div>

                <div class="row q-my-lg">

                    <InfoComponent />

                </div>

                <div class="row">
                    <div class="col ">
                        <h6 class="text-weight-bold">Öne Çıkan Ürünler</h6>
                        <Product />
                    </div>
                </div>

                <div class="row justify-center">
                    <ExtensionComponent />
                </div>
            </div>
            <div class="col-2"></div>
        </div>




    </div>
</template>

<script lang="ts">

import NavbarBottom from "../components/NavbarBottom.vue"
import CarouselComponent from "../components/CarouselComponent.vue"
import FeatureComponent from "../components/FeatureComponent.vue"
import InfoComponent from "../components/InfoComponent.vue"
import Product from "../components/ProductComponent.vue"


import { defineComponent } from 'vue';
import CategoryList from "./CategoryList.vue";
import ExtensionComponent from "./ExtensionComponent.vue"

export default defineComponent({



    components: { NavbarBottom, CategoryList, CarouselComponent, FeatureComponent, InfoComponent, Product, ExtensionComponent }
})
</script>