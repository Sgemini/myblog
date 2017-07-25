<template>
  <div id="app">
    <h1 id='blog-title'>Sgemini's blog</h1>
    <hr />
    <nav id='nav'>
      <ul>
        <li><a href='#/articles'>文章</a></li>
        <li><a href='#/photoes'>游戏</a></li>
        <li>导航栏3</li>
        <li>导航栏4</li>
      </ul>
    </nav>
    <main>
      <router-view></router-view>
    </main>
    <address id='address'>
      <ul>
        <li><img src='./assets/aurora.jpg' id='avatar' /></li>
        <li>Sgemini</li>
        <li><a href='https://github.com/Sgemini'>github</a></li>
        <li>中国 广州</li>
      </ul>
    </address>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body {
    background: antiquewhite;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    line-height: 30px;
  }

  a {
    text-decoration: none;
  }

  #blog-title {
    height: 50px;
    margin-bottom: 0;
    line-height: 50px;
  }

  #app {
    padding: 0 20px;
  }

  #nav {
    float: left;
    min-width: 20%;
    border: 1px solid black;
    margin: 0 20px 20px 0;
    text-indent: 20px;
  }

  main {
    float: right;
    width: 60%;
    min-height: 500px;
    margin-right: 20px;
    padding: 20px;
    border: 1px solid black;
  }

  #address {
    float: left;
    min-width: 20%;
    border: 1px solid black;
  }

  #address li {
    text-align: center;
  }

  #avatar {
    width: 100px;
    border-radius: 20px;
  }
</style>
