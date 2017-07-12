<template>
  <div id="app">
    <h1 id='blog-title'>Sgemini's blog</h1>
    <hr />
    <nav id='nav'>
      <ul>
        <li>导航栏1</li>
        <li>导航栏2</li>
        <li>导航栏3</li>
        <li>导航栏4</li>
      </ul>
    </nav>
    <section id='section'></section>
    <address id='address'>
      <ul>
        <li><img src='./assets/aurora.jpg' id='avatar' /></li>
        <li>Sgemini</li>
        <li><a href='https://github.com/Sgemini'>github</a></li>
        <li>中国 广州</li>
      </ul>
    </address>
    <router-view></router-view>
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
  }

  #section {
    float: right;
    width: 60%;
    min-height: 500px;
    margin-right: 20px;
    border: 1px solid black;
  }

  #address {
    float: left;
    min-width: 20%;
    border: 1px solid black;
  }

  #address ul {
    padding-left: 0;
  }

  #address li {
    text-align: center;
  }

  #avatar {
    width: 100px;
    border-radius: 20px;
  }
</style>
