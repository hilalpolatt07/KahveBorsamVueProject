<template>
    <div class="row q-mt-lg">
        <div class="col-2">

        </div>
        <div class="col-8">
            <h4 class="text-bold text-center">Toptan Kahve Çeşitleri ve Fiyatları</h4>
            <div class="row">
                <div class="col-2">
                    <CategoryList />
                </div>
                <div class="col">
                    <ProductComponent />
                    <ExtensionComponent :extensionList="extensionList" />
                    <TextComponent />
                </div>
            </div>

        </div>

        <div class="col-2">

        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent, reactive, toRefs } from 'vue';
import ProductComponent from './ProductComponent.vue';
import CategoryList from './CategoryList.vue';
import ExtensionComponent from './ExtensionComponent.vue';
import TextComponent from './TextComponent.vue';

export default defineComponent({

    setup() {
        const state = reactive({
           
            extensionList: [
                { id: 1, url: "extension2.jpg" },
            ]
        })

        return { ...toRefs(state) }

    },


    components: { ProductComponent, CategoryList, ExtensionComponent, TextComponent }
})
</script>