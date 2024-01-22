<template>
    <div>
        <div class="flex bg-grey q-pa-lg items-center q-my-lg" v-for="dbItem in getBasketList" :key="dbItem.id">

            <div class="photo-section ">
                <img class="q-mx-auto" :src="require(`@/assets/products/${dbItem?.url}`)">
            </div>
            <h5 class="q-ml-lg ">{{ dbItem.name }}</h5>

        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'pinia';
import basketStore from '@/stores/basketStore';
import { authStore } from '@/stores';

export default defineComponent({
    

    created() {
        //@ts-ignore
        this.setBasketList(this.getUser.email)

    }, 

    unmounted() {
        this.clearBasketList()
    },

    methods: {
        ...mapActions(basketStore, ["setBasketList", "clearBasketList"])
    },


    computed: {
        ...mapState(basketStore, ["getBasketList"]),
        ...mapState(authStore, ["getUser"])
    },

})
</script>