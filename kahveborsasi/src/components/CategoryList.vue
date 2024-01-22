<template>
    <q-list bordered separator>
        <q-item>
            <q-item-section class="text-weight-bold">Kategoriler</q-item-section>
        </q-item>

        <q-item v-for="category in getCategoryList" :key="category.id" clickable v-ripple>
            <q-item-section>
                <q-item-label>{{ category.name }}</q-item-label>
            </q-item-section>
        </q-item>
    </q-list>
</template>


<script lang="ts">

import { defineComponent} from 'vue';
import { mapState, mapActions } from 'pinia';
import categoryStore from '@/stores/categoryStore';

export default defineComponent({

    async created() {
        this.setCategoryList()

    },

    unmounted(){
        this.clearCategoryList()
    },

    methods: {
        ...mapActions(categoryStore, ["setCategoryList","clearCategoryList"])
    },

    computed: {
        ...mapState(categoryStore, ["getCategoryList"])
    }

})
</script>