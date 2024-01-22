<template>
    <div class="col">

        <NavbarBottom />

        <div class="row">
            <div class="col-2"></div>
            <div class="col-8 ">
                <h4 class="text-center text-weight-bold">Taksitli ve Toptan Kahve</h4>
                
                <div class="row">
                    <div class="col q-pl-lg">
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

                <div class="row  q-my-lg">
                    <ExtensionComponent :extensionList="extensionList" />
                </div>
            </div>
            <div class="col-2"></div>
        </div>

        <Footer/>
        
    </div>
</template>

<script lang="ts">

import NavbarBottom from "../components/NavbarBottom.vue"
import CarouselComponent from "../components/CarouselComponent.vue"
import FeatureComponent from "../components/FeatureComponent.vue"
import InfoComponent from "../components/InfoComponent.vue"
import Product from "../components/ProductComponent.vue"
import Footer from "../components/FooterComponent.vue"

import ExtensionComponent from "./ExtensionComponent.vue"
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({

    setup() {
        const state = reactive({
            extensionList: [
                { id: 1, url: "extension2.jpg" },
                { id: 2, url: "extension3.jpg" },
            ]
        })

        return { ...toRefs(state) }

    },

    components: { NavbarBottom, CarouselComponent, FeatureComponent, InfoComponent, Product, ExtensionComponent,Footer }
})
</script>