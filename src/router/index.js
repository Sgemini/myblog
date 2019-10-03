import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Home from '@/pages/home/index'
import ArticleIndex from '@/pages/articles/index'
import ArticleShow from '@/pages/articles/show'
import GameIndex from '@/pages/games/index'
import GameShow from '@/pages/games/show'
import CuiCanBaoShi from '@/assets/games/cuicanbaoshi'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/games/cuicanbaoshi', name: 'CuiCanBaoShi', component: CuiCanBaoShi },
        { path: '/', name: 'Home', component: Home },
        { path: '/articles', name: 'ArticleIndex', component: ArticleIndex },
        { path: '/articles/:slug', name: 'ArticleShow', component: ArticleShow },
        { path: '/games/', name: 'GameIndex', component: GameIndex },
        { path: '/games/:slug', name: 'GameShow', component: GameShow }
    ]
})
