import Vue from 'vue'
import VueRouter from 'vue-router'
import TrafficLights from "../components/TrafficLights";

Vue.use(VueRouter)

const routes = [
    {
        name: `home`,
        path: `/`,
        redirect: `red`
    },
    {
        name: `red`,
        path: `/red`,
        props: {currentColor: `red`, time: 10},
        component: TrafficLights,
    },
    {
        name: `yellow`,
        path: `/yellow`,
        props: {currentColor: `yellow`, time: 3},
        component: TrafficLights,
    },
    {
        name: `green`,
        path: `/green`,
        props: {currentColor: `green`, time: 15},
        component: TrafficLights,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router