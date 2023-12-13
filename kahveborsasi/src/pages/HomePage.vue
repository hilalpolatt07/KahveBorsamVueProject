<template>
    <div>
        <Navbar />
    </div>
</template>

<script lang="ts">

import Navbar from "../components/NavbarComponent.vue"
import { defineComponent } from 'vue';

export default defineComponent({

    components: { Navbar }
})
</script>