
import { createRouter, createWebHashHistory } from "vue-router";


const routes =  [

    {
        name:"HomePage",
        path:"/",
        component:() => import("../pages/HomePage.vue")
    },
    {
        name:"ProductPage",
        path:"/products",
        component:() => import("../pages/ProductPage.vue")
    },
    {
        name:"InfoPage",
        path:"/info",
        component:() => import("../pages/InfoPage.vue")
    }

]


const router = createRouter({
    routes,
    history:createWebHashHistory()
})

export default router