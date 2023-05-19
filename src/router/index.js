import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path : '/',
        name : 'produk.IndexApi',
        component: ()=> import(/*webpackChunkName: "produk.indexApi" */ '@/views/produk/IndexApi.vue')
    },
    {
        path : '/login',
        name : 'LoginUser',
        component: ()=> import(/*webpackChunkName: "produk.indexApi" */ '@/views/login/LoginUser.vue')
    },
    {
        path : '/detailproduk/:produkid',
        name : 'produk.Detailproduk',
        component: ()=> import(/*webpackChunkName: "produk.detailproduk" */ '@/views/produk_detail/Detailproduk.vue'),
        props : true,
    },
    {
        path : '/catalogproduk',
        name : 'produk.Catalogproduk',
        component: ()=> import(/*webpackChunkName: "produk.catalogproduk" */ '@/views/produk_catalog/Catalogproduk.vue'),
        props : true,
    },
    {
        path : '/aboutmeidy',
        name : 'produk.About',
        component: ()=> import(/*webpackChunkName: "produk.about" */ '@/views/produk_about/Aboutmeidy.vue'),
        props : true,
    },
    {
        path : '/cart/',
        name : 'produk.Cart',
        component: ()=> import(/*webpackChunkName: "produk.cart" */ '@/views/produk_cart/Cart.vue'),
        props : true,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes 
})

export default router