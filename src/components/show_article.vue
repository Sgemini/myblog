<template>
  <article>
    <h2>{{ article.title }}</h2>
    <time>发布于{{ dateFormat(article.created_at) }}</time>
    <hr />
    <p>
      {{ article.body }}
    </p>
    <footer>
      <a class='return' href="#/articles">返回</a>
      <a href="#/">首页</a>
    </footer>
  </article>
</template>

<script>
  import mixin from '@/share/share'
  export default {
    mixins: [mixin],
    data () {
      return {
        article: ''
      }
    },
    created () {
      this.$http.get('http://localhost:3000/articles/' + this.$route.params.article).then(response => {
        this.$set(this, 'article', response.body)
      })
    }
  }
</script>

<style scoped>
  article {
    border: 1px solid black;
    text-align: center;
  }
  p {
    padding: 20px;
    line-height: 40px;
    text-align: left;
    text-indent: 30px;
  }
  footer {
    text-align: right;
    padding: 20px;
  }

  .return {
    float: left;
  }
</style>
