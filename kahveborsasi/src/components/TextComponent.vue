<template>
        <div v-for="text in getTextList" :key="text.id" class="col">
            <h4 class="text-bold ">{{ text.title }}</h4>
            <p>{{ text.content }}</p>
        </div>
</template>


<script lang="ts">

import textStore from '@/stores/textStore';
import { defineComponent } from 'vue';
import { mapState,mapActions } from 'pinia';

export default defineComponent({
    
    async created() {
       this.setTextList()
    },

    unmounted() {
        this.clearTextList()
    },

    methods:{

        ...mapActions(textStore,["setTextList","clearTextList"])
    },

    computed:{

        ...mapState(textStore,["getTextList"])
    }

    


})
</script>