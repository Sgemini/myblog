import Vue from 'vue'
import Router from 'vue-router'
import { getCookie, setCookie } from '@/share/methods'
import FetchApi from '@/share/axios'
import {
    Input, Button,
    Menu, Submenu, MenuItem, MenuItemGroup,
    Form, FormItem,
    Dialog
} from 'element-ui'

import Home from '@/pages/home/index'
import ArticleIndex from '@/pages/articles/index'
import ArticleShow from '@/pages/articles/show'
import GameIndex from '@/pages/games/index'
import GameShow from '@/pages/games/show'
import CuiCanBaoShi from '@/assets/games/cuicanbaoshi'
import Admin from '@/pages/admin/index'
import AdminLogin from '@/pages/admin/pages/login'
import Adoption from '@/pages/admin/pages/adoptions'

Vue.use(Router)
Vue.use(Input)
Vue.use(Button)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Dialog)

Vue.prototype.$getCookie = getCookie
Vue.prototype.$setCookie = setCookie
Vue.prototype.$fetchApi = FetchApi

export default new Router({
    mode: 'history',
    routes: [
        { path: '/games/cuicanbaoshi', component: CuiCanBaoShi },
        { path: '/', component: Home },
        { path: '/articles', component: ArticleIndex },
        { path: '/articles/:slug', component: ArticleShow },
        { path: '/games/', component: GameIndex },
        { path: '/games/:slug', component: GameShow },
        {
            path: '/admin',
            component: Admin,
            children: [
                { path: 'adoptions', component: Adoption }
            ]
        },
        { path: '/admin/login', component: AdminLogin }
    ]
})
