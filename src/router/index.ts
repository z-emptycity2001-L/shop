import { createRouter, createWebHistory, RouteRecordRaw, RouteRecordRedirectOption } from 'vue-router';

type RouteType = {
    path: string
    name?: string
    component: any
    redirect?: RouteRecordRedirectOption
    children?: RouteType[]
}
const Main = () => import('../view/main/main.vue')
const Login = () => import('../view/login/login.vue')
const Home = () => import('../view/main/children/home/home.vue')
const Category = () => import('../view/main/children/category/category.vue')
const Shop = () => import('../view/main/children/shop/shop.vue')
const My = () => import('../view/main/children/my/my.vue')
const routes: RouteType[] = [
    {
        path: '/',
        name: "main",
        component: Main,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: "Home",
                component: Home
            },
            {
                path: '/category',
                name: "Category",
                component: Category
            },
            {
                path: '/shop',
                name: "Shop",
                component: Shop
            },
            {
                path: '/my',
                name: "My",
                component: My
            }
        ]
    },
    {
        path: '/login',
        name: "login",
        component: Login
    }
]

export const router = createRouter({
    routes: routes as RouteRecordRaw[],
    history: createWebHistory()
})