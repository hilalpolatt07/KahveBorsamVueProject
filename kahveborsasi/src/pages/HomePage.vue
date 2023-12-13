<template>
    <div>
        <Navbar />
        <Content/>
    </div>
</template>

<script lang="ts">

import Navbar from "../components/NavbarComponent.vue"
import Content from "../components/ContentComponent.vue"
import { defineComponent } from 'vue';

export default defineComponent({

    components: { Navbar,Content }
})
</script>