<template>
    <div>
        <NavbarComponent/>
        <NavbarBottom/>
        <SSSPageContent/>
    </div>
</template>


<script lang="ts">
import NavbarBottom from '@/components/NavbarBottom.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';
import SSSPageContent from '@/components/SSSPageContent.vue';
import { defineComponent } from 'vue';


export default defineComponent({


    components: { NavbarComponent, NavbarBottom, SSSPageContent }
})
</script>