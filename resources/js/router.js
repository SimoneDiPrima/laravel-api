import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from "./pages/HomePage.vue";
import ContactsPage from "./pages/ContactsPage.vue";

Vue.use(VueRouter)

// definisco le rotte e inizializzo una nuova istanza di router

const routes = new VueRouter({
    mode:'history',
    routes:[
        {path:'/',component: HomePage},
        {path:'/contacts',component: ContactsPage},
    ]
})
export default routes;