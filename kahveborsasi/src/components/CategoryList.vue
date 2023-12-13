<template>
    <q-list bordered separator>
        <q-item>
            <q-item-section class="text-weight-bold">Kategoriler</q-item-section>
        </q-item>

        <q-item class="" clickable v-ripple>
            <q-item-section>

                <q-item-label> <a href="#" class="text-decoration-none q-mr-sm"><img class="navbar-icon"
                            src="../assets/navbar/coffee.png" alt="" /></a>Kavrulmuş Kahve</q-item-label>
            </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
            <q-item-section>
                <q-item-label><a href="#" class="text-decoration-none q-mr-sm"><img class="navbar-icon"
                            src="../assets/navbar/coffee.png" alt="" /></a>Expresso</q-item-label>
            </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
            <q-item-section>
                <q-item-label><a href="#" class="text-decoration-none q-mr-sm"><img class="navbar-icon"
                            src="../assets/navbar/coffee.png" alt="" /></a>Harman</q-item-label>
            </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
            <q-item-section>
                <q-item-label><a href="#" class="text-decoration-none q-mr-sm"><img class="navbar-icon"
                            src="../assets/navbar/coffee.png" alt="" /></a>Single Origin</q-item-label>
            </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
            <q-item-section>
                <q-item-label><a href="#" class="text-decoration-none q-mr-sm"><img class="navbar-icon"
                            src="../assets/navbar/coffee.png" alt="" /></a>Türk Kahvesi</q-item-label>
            </q-item-section>
        </q-item>
        <div class="row justify-center">
            <q-btn class=" text-weight-bold q-mt-md q-pa-md " color="black" label="İndirimli Ürünler" />
        </div>
    </q-list>
</template>