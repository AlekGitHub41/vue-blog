import Main from "../Pages/Main.vue";
import About from "../Pages/About.vue";
import { createRouter, createWebHistory } from "vue-router";
import PostPage from "../Pages/PostPage.vue";

const routes = [
    {
        path: "/",
        component: PostPage,
    },
    {
        path: "/main",
        component: PostPage,
    },
    {
        path: "/about",
        component: About,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;