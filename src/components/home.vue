<template>
  <section id='articles-index'>
    <h2>所有文章</h2>
    <ul>
      <li v-for='article in articles'>
        <a :href="article.title">{{ article.title }}</a>
      </li>
    </ul>
    <a class='more' href='https://my-blog.herokuapp.com/articles'>更多</a>
  </section>
</template>

<script>
export default {
  data () {
    return {
      articles: [
        { title: 'article1' },
        { title: 'article2' },
        { title: 'article3' },
        { title: 'article4' },
        { title: 'article5' }
      ]
    }
  }
  // created: {
  //   articles = this.$http.get('/someUrl').then(response => {
  //               // get body data
  //               this.someData = response.body;

  //              }, response => {
  //                 // error callback
  //              });
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .more {
    display: block;
    text-align: right;
  }
  #articles-index {
    padding: 20px;
    border: 1px solid black;
  }

  #articles-index ul li {
    line-height: 30px;
  }
</style>
