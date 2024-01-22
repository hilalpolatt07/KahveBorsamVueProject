<template>
    <div class="row">
        <div class="col-2">
            
        </div>
        <div class="col-8 text-center q-mb-lg">
                <OurStory />
            </div>
        <div class="col-2"></div>
        <img class="w-100" src="../assets/sssphoto.png" alt="">
        <FooterComponent />
        
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import FooterComponent from './FooterComponent.vue';
import OurStory from './OurStory.vue';


export default defineComponent({

    components: { FooterComponent, OurStory }
})
</script>