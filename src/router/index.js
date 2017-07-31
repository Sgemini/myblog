import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import ShowArticle from '@/components/show_article'
import AllArticles from '@/components/all_articles'
import Games from '@/components/all_games'
import ShowGame from '@/components/show_game'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/articles', component: AllArticles },
    { path: '/articles/:article', component: ShowArticle },
    { path: '/games', component: Games },
    { path: '/games/:game', component: ShowGame }
  ]
})
