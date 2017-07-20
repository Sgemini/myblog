<template>
  <section>
    <h2>所有文章</h2>
    <ul id='articles-list'>
      <li v-for='article in articles'>
        <a :href="'#/articles/' + article.title">{{ article.title }}</a>
        <time id='article-time'>{{ App.DateFormat(article.created_at) }}</time>
      </li>
    </ul>
  </section>
</template>
<script>
  export default {
    data () {
      return {
        articles: []
      }
    },
    created () {
      this.$http.get('/articles').then(response => {
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
</style>
