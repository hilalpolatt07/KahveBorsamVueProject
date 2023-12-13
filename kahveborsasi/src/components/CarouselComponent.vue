<template>
  <div class="q-pa-md">
    <q-carousel animated arrows v-model="slide" navigation infinite>
      <q-carousel-slide v-for="carousel in carouselList" :key="carousel.id" :name="carousel.id"
        :img-src="require(`../assets/carousel/${carousel.url}`)" />

    </q-carousel>
  </div>
</template> 

  

<script lang="ts">

import { defineComponent, reactive, toRefs, ref } from 'vue';
import CarouselPhoto from "../types/CarouselPhoto"


export default defineComponent({

  setup() {

    const state = reactive({
      
      slide: ref(1),
      
      carouselList: [
        { id: 1, url: "carousel1.jpg" },
        { id: 2, url: "carousel2.jpg" },
        { id: 3, url: "carousel3.jpg" }

      ] as CarouselPhoto[],


    })
    return { ...toRefs(state) }
  }

})
</script>