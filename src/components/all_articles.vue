<template>
  <section>
    <h2>所有文章</h2>
    <ul id='articles-list'>
      <li v-for='article in articles'>
        <a :href="'#/articles/' + article.title">{{ article.title }}</a>
        <time id='article-time'>{{ dateFormat(article.created_at) }}</time>
      </li>
    </ul>
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
      console.log(this.dateFormat())
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
