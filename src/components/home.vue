<template>
  <section id='articles-index'>
    <h2>最新文章</h2>
    <ul>
      <li v-for='article in articles'>
        <router-link :to="{ path: '/articles/'+article.title }">
          {{ article.title }}
        </router-link>
        <time id='article-time'>{{ dateFormat(article.created_at) }}</time>
      </li>
    </ul>
    <a class='more' href='#/articles'>更多</a>
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
