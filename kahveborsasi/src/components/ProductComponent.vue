<template>
    <div class="q-pa-md row items-start justify-center q-gutter-md">
        <q-card v-for="product in getProductList" :key="product.id" class="my-card" flat bordered>

            <img :src="require(`../assets/products/${product.url}`)" alt="">

            <q-card-section>
                <div class="row no-wrap items-center">
                    <div class="col text-h6 ellipsis">
                        {{ product.name }}
                    </div>
                </div>
            </q-card-section>

            <q-card-section class="q-pt-none flex justify-between">
                <div class="text-subtitle1">
                    {{ product.price }} TL
                </div>
                <div v-if="isAuth">
                    <q-btn @click="addBasket(product)" round color="green" glossy icon="local_grocery_store" />
                </div>
            </q-card-section>


        </q-card>
    </div>
</template>


<script lang="ts">
import Product from '@/types/Product';
import { defineComponent,reactive,toRefs } from 'vue';
import { mapState, mapActions } from 'pinia';
import { authStore } from "@/stores/index"
import productStore from '@/stores/productStore';
import basketStore from '@/stores/basketStore';



export default defineComponent({


    setup() {

        const state = reactive({
            email: "",
        })

        return { ...toRefs(state) }

    },

    async created() {
        this.setProductList()

        //@ts-ignore
        this.email = this.getUser?.email;
        

    },

    unmounted() {
        this.clearProductList()
    },

    methods: {

        addBasket(product: Product) {

            //@ts-ignore
            this.addToBasket(product,this.email)

        },

        ...mapActions(productStore, ["setProductList", "clearProductList"]),
        ...mapActions(basketStore,["addToBasket"])
    },


    computed: {
        ...mapState(authStore, ["isAuth", "getUser"]),
        ...mapState(productStore, ["getProductList"])
    }

})
</script>