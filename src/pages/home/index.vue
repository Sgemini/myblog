<template>
  <div id='articles-index'>
    <h1 id='blog-title'>Sgemini's blog</h1>
    <hr />
    <Nav />
    <hr />
    <section>
      <h2>最新文章</h2>
      <ul>
        <li v-for='article in articles' v-bind:key="article.id">
          <router-link :to="{ path: '/articles/'+article.title }">
            {{ article.title }}
          </router-link>
          <time id='article-time'>{{ dateFormat(article.created_at) }}</time>
        </li>
      </ul>
      <a class='more' href='#/articles'>更多</a>
    </section>
  </div>
</template>

<script>
import mixin from '../../share/date'
import Nav from '../../components/nav.vue'
export default {
  mixins: [mixin],
  data () {
    return {
      articles: []
    }
  },
  components: {
    Nav
  }
  // created () {
  //   this.$http.get('http://localhost:3001/articles').then(response => {
  //     this.$set(this, 'articles', response.body)
  //   })
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .more {
    display: block;
    text-align: right;
  }
  #article-time {
    float: right;
  }
  #articles-index {
    padding: 20px;
  }

  #articles-index ul li {
    line-height: 30px;
  }
</style>
