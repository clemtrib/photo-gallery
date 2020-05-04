<template>
    <div class="app">
      <div id="menu">
        <router-link to="/">Home</router-link>
        <router-link to="/gallery">Gallery</router-link>
      </div>
      <div id="page">
        <router-view/>
      </div>
    </div>
</template>

<script>
export default {
    name: 'App'
};
</script>

<style lang="scss">

  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #2c3e50;
    font-family: Open Sans;
    color: white;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2 {
    font-weight: 100;
  }

  a {
    color: white;
  }

  #menu {
    padding: 10px;
    position: fixed;
    z-index: 2;
    top: 0;
    right: 0;
    border: 1px solid black;
    width: 100%;
    background-image: linear-gradient( 45deg,  red, orange);

    a {
      margin: 0;
      padding: 20px;
      text-decoration: none;
      font-size: 1.5em;
    }

    a:hover {
      text-decoration: underline;
    }
  }

  #page {
    padding-top: 80px;
  }

  .container {
    margin: auto;
    position: relative;
  }

  .selected {
    opacity: 50%;
  }

</style>
