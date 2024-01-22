<template>
    <div>
        <Navbar />
        <NavbarBottom />
        <ProductPageContent />
        <FooterComponent />
    </div>
</template>

<script lang="ts">

import Navbar from "../components/NavbarComponent.vue";
import NavbarBottom from "../components/NavbarBottom.vue";


import { defineComponent } from 'vue';
import ProductPageContent from "@/components/ProductPageContent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default defineComponent({

   

    components: { Navbar, NavbarBottom, ProductPageContent, FooterComponent }
})
</script>