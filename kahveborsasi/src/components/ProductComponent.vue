<template>
    <div class="q-pa-md row items-start justify-center q-gutter-md">
        <q-card v-for="product in productList" :key="product.id" class="my-card" flat bordered>

            <img :src="require(`../assets/products/${product.url}`)" alt="">

            <q-card-section>
                <div class="row no-wrap items-center">
                    <div class="col text-h6 ellipsis">
                        {{ product.name }}
                    </div>
                </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <div class="text-subtitle1">
                     {{ product.price }} TL
                </div>
                <div class="text-caption text-grey">
                   Kahve
                </div>
            </q-card-section>
            <q-card-section class="justify-center row">
                <q-btn  color="green" glossy icon="local_grocery_store" />
            </q-card-section>

            <q-separator></q-separator>

        </q-card>
    </div>
</template>


<script lang="ts">

import { defineComponent, reactive, toRefs } from 'vue';
import Product from "../types/Product"

export default defineComponent({

    setup() {
        const state = reactive({
            productList:[
                {id:1,name:"Kavrulmuş Kahve",url:"product1.jpg",price:50},
                {id:1,name:"Orta Kavrulmuş",url:"product2.jpg",price:220},
                {id:1,name:"Çiğ Yeşil Çekirdek",url:"product3.jpg",price:170},
                {id:1,name:"Çiğ Yeşil Çekirdek Yeni Hasat",url:"product4.jpg",price:150},
                {id:1,name:"Koyu Kavrulmuş",url:"product5.jpg",price:250},

            ] as Product[]
        })

        return { ...toRefs(state) }
    }

})
</script>