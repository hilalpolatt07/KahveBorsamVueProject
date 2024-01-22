<template>
    <div>
        <Navbar/>
        <NavbarBottom  class="q-mb-lg"/>
        <InfoPageContent/>
    </div>
</template>

<script lang="ts">

import Navbar from "../components/NavbarComponent.vue";
import NavbarBottom from "../components/NavbarBottom.vue";

import { defineComponent } from 'vue';
import InfoPageContent from "@/components/InfoPageContent.vue";

export default defineComponent({


components:{ Navbar, NavbarBottom, InfoPageContent }
})
</script>