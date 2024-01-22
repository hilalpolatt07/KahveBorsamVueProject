<template>
    <div class="row">
        <div class="col-2">

        </div>
        <div class="col-8">
            <OurStory />
            <div class="row q-my-lg justify-center text-weight-bold">
                <FeatureComponent />
            </div>
        </div>
        <div class="col-2">

        </div>

        <FooterComponent />
    </div>
</template>


<script lang="ts">


import { defineComponent } from 'vue';
import FooterComponent from "@/components/FooterComponent.vue";
import FeatureComponent from './FeatureComponent.vue';
import OurStory from './OurStory.vue';


export default defineComponent({


    components: { FooterComponent, FeatureComponent,OurStory }
})
</script>