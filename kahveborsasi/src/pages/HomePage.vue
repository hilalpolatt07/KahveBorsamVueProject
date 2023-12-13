<template>
    <div class="navbar-bg">
        <div class="row">
            <div class="col-2"></div>

            <NavbarBadge />
            <div class="col-2">

            </div>
        </div>


    </div>
</template>

<script lang="ts">
import NavbarBadge from "../components/NavbarBadge.vue"

import { defineComponent } from 'vue';

export default defineComponent({

    components: { NavbarBadge }
})
</script>