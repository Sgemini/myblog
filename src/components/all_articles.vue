<template>
  <section>
    <h2>所有文章</h2>
    <ul id='articles-list'>
      <li v-for='article in articles'>
        <router-link :to="{ path: article.title, params: { article: article.title } }" append>
          {{ article.title }}
        </router-link>
        <time id='article-time'>{{ dateFormat(article.created_at) }}</time>
      </li>
    </ul>
    <footer>
      <a href="#/">首页</a>
    </footer>
  </section>
</template>
<script>
  import mixin from '@/share/share'
  export default {
    mixins: [mixin],
    data () {
      return {
        articles: []
      }
    },
    created () {
      this.$http.get('http://localhost:3000/articles').then(response => {
        this.$set(this, 'articles', response.body)
      })
    }
  }
</script>

<style scoped>
  #articles-list li {
    line-height: 30px;
  }

  #article-time {
    float: right;
  }

  footer {
    text-align: right;
  }
</style>
