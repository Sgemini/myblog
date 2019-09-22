<template>
  <div id='articles-index'>
    <h1 id='blog-title'>Sgemini's blog</h1>
    <hr />
    <Nav />
    <hr />
    <section class='section' id='articles-section'>
      <h2>最新文章</h2>
      <ul>
        <li v-for='article in articles' :key='article.id'>
          <router-link :to="{ path: `/articles/${article.title}` }">
            {{ article.title }}
          </router-link>
          <time id='article-time'>{{ dateFormat(article.created_at) }}</time>
        </li>
      </ul>
      <a class='more' href='/articles'>更多</a>
    </section>
    <hr />
    <section class='section' id='games-section'>
      <h2>游戏</h2>
      <ul class='list-container'>
        <li class='game-item'>
          <router-link :to="{ path: 'games/2048' }">
            <img class='game-pic' alt='2048' />
            <span>2048</span>
          </router-link>
        </li>
        <li class='game-item'>
          <router-link :to="{ path: 'games/2048' }">
            <img class='game-pic' alt='2048' />
            敬请期待
          </router-link>
        </li>
        <li class='game-item'>
          <router-link :to="{ path: 'games/2048' }">
            <img class='game-pic' alt='2048' />
            敬请期待
          </router-link>
        </li>
        <li class='game-item'>
          <router-link :to="{ path: 'games/2048' }">
            <img class='game-pic' alt='2048' />
            敬请期待
          </router-link>
        </li>
        <li class='game-item'>
          <router-link :to="{ path: 'games/2048' }">
            <img class='game-pic' alt='2048' />
            敬请期待
          </router-link>
        </li>
        <li class='game-item'>
          <router-link :to="{ path: 'games/2048' }">
            <img class='game-pic' alt='2048' />
            敬请期待
          </router-link>
        </li>
        <li class='game-item'>
          <router-link :to="{ path: 'games/2048' }">
            <img class='game-pic' alt='2048' />
            敬请期待
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import date from '../../share/date'
import Nav from '../../components/nav.vue'

import axios from 'axios'
export default {
  mixins: [date],
  data () {
    return {
      articles: []
    }
  },
  components: {
    Nav
  },
  created () {
    axios.get('http://localhost:3001/articles').then(res => {
      this.articles = res.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  #articles-section {
    .more {
      display: block;
      text-align: right;
      margin-top: 10px;
    }
    #article-time {
      float: right;
    }

    #articles-index ul li {
      line-height: 30px;
    }
  }

  .section {
    padding: 20px 0;
  }

  #games-section {
    .list-container {
      overflow-x: auto;
      display: flex;
    }

    .game-item {
      width: 35%;
      border: 1px solid black;
      text-align: center;
      height: 150px;
      margin-bottom: 20px;
      margin-right: 15px;
      flex-shrink: 0;
    }

    .game-pic {
      width: 80%;
      height: 50px;
      margin-top: 20px;
    }
  }
</style>
