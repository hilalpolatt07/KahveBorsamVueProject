<template>
    <div>
        <Navbar />
        <BasketPageContent />
    </div>
</template>

<script lang="ts">

import BasketPageContent from "@/components/BasketPageContent.vue";
import Navbar from "../components/NavbarComponent.vue"
import { defineComponent } from 'vue';

export default defineComponent({

    components: { Navbar, BasketPageContent }
})
</script>