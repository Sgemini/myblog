<template>
  <section>
    <h2>hello, games</h2>
    <ul>
      <li class='game-item'>
        <router-link :to="{ path: '2048' }" append>
          <img class='game-pic' alt='2048' />
          <span>2048</span>
        </router-link>
      </li>
      <li class='game-item'>
        <router-link>
          <img class='game-pic' alt='2048' />
          敬请期待
        </router-link>
      </li>
      <li class='game-item'>
        <router-link>
          <img class='game-pic' alt='2048' />
          敬请期待
        </router-link>
      </li>
      <li class='game-item'>
        <router-link>
          <img class='game-pic' alt='2048' />
          敬请期待
        </router-link>
      </li>
      <li class='game-item'>
        <router-link>
          <img class='game-pic' alt='2048' />
          敬请期待
        </router-link>
      </li>
      <li class='game-item'>
        <router-link>
          <img class='game-pic' alt='2048' />
          敬请期待
        </router-link>
      </li>
      <li class='game-item'>
        <router-link>
          <img class='game-pic' alt='2048' />
          敬请期待
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .game-item {
    float: left;
    width: 100px;
    border: 1px solid black;
    text-align: center;
    height: 150px;
    margin-bottom: 20px;
    margin-right: 2%;
  }

  .game-pic {
    width: 80%;
    height: 50px;
    margin-top: 20px;
  }
</style>
