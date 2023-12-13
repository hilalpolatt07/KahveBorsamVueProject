<template>
    <div class="row">
            <div class="col-12 category-color">
                <div class="row">

                    <div class="col-2"></div>
                    <div class="col-8">
                        <div class="row navbar-bottom">
                            <div class="col-1">
                                <a href="#" class=" text-decoration-none"><img width="15"  src="../assets/navbar/home.png" alt="">
                                ANA SAYFA</a>
                            </div>
                            <div class="col-1">
                                <router-link class="text-decoration-none"  :to="{path:'/products'}">
                                    <img width="15" src="../assets/navbar/coffee.png" alt="">KAHVELER
                                </router-link>
                                <a href="#" class="text-decoration-none"><img width="15px" src="../assets/navbar/coffee.png" alt="">
                                
                                </a>
                            </div>
                            <div class="col-1">
                                <router-link class="text-decoration-none"  :to="{path:'/info'}">
                                    <img width="15" src="../assets/navbar/info.png" alt="">
                                    HİKAYEMİZ
                                </router-link>
                                
                                
                            </div>
                            <div class="col-1">
                                <a href="#" class="text-decoration-none"><img width="15" src="../assets/navbar/blog.png" alt="">
                                    BLOG
                                </a>
                                
                                
                            </div>
                            

                        </div>
                    </div>
                    <div class="col-2"></div>

                </div>
            </div>
        </div>
</template>