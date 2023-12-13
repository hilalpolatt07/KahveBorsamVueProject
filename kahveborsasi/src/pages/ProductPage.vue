<template>
    <div>
        <Navbar/>
        <NavbarBottom/>
        <Product/>
    </div>
</template>

<script>

import Navbar from "../components/NavbarComponent.vue";
import NavbarBottom from "../components/NavbarBottom.vue";

import Product from "../components/ProductComponent.vue"

import { defineComponent } from 'vue';

export default defineComponent({


components:{ Product, Navbar,NavbarBottom }
})
</script>