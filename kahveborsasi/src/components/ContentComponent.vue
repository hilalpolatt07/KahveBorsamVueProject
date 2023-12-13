<template>
    <div class="col">

        <NavbarBottom />

        <div class="row">
            <div class="col-2"></div>
            <div class="col-8 ">
                <h4 class="text-center text-weight-bold">Taksitli ve Toptan Kahve</h4>
                <CategoryList />
            </div>
            <div class="col-2"></div>
        </div>




    </div>
</template>

<script lang="ts">

import NavbarBottom from "../components/NavbarBottom.vue"

import { defineComponent } from 'vue';
import CategoryList from "./CategoryList.vue";

export default defineComponent({

    components: { NavbarBottom, CategoryList }
})
</script>