
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
    },
    {
        name:"SSSPage",
        path:"/sss",
        component:() => import("../pages/SSSPage.vue")
    },
    {
        name:"LoginPage",
        path:"/login",
        component:() => import("../pages/LoginPage.vue")
    },
    {
        name:"RegisterPage",
        path:"/register",
        component:() => import("../pages/RegisterPage.vue")
    },
    {
        name:"BasketPage",
        path:"/basket",
        component:() => import("../pages/BasketPage.vue")
    },

]


const router = createRouter({
    routes,
    history:createWebHashHistory()
})

export default router