<template>
    <div class="col">
        <div class="row justify-center">
            <div v-for="extension in extensionList" :key="extension.id" class="col-5 q-mr-lg">
                <a href="#"><img  :src="require(`../assets/${extension.url}`)" /></a>
            </div>
            
        </div>
        
    </div>
</template>


<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({

    props:["extensionList"]

})
</script>