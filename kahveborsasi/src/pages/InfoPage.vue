<template>
    <div>
        <Navbar/>
        <NavbarBottom  class="q-mb-lg"/>
        <InfoComponent/>
    </div>
</template>

<script>

import Navbar from "../components/NavbarComponent.vue";
import NavbarBottom from "../components/NavbarBottom.vue";
import InfoComponent from "../components/InfoComponent.vue"

import { defineComponent } from 'vue';

export default defineComponent({


components:{  Navbar,NavbarBottom,InfoComponent }
})
</script>