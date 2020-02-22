<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>

* {
    margin: 0;
    padding: 0;
}

ul {
    list-style: none;
}

html, body {
    height: 100%;
}

#app {
    /* background-color: lavender; */
    padding: 20px;
    height: 100vh;
}

a {
    text-decoration: none;
}

</style>
