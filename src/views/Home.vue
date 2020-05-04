<template>
  <div class="home">
    <h1>Front-End Test</h1>

    <div class="wrapper">
      <h2 class="instructions-title">Instructions</h2>

      <ul class="instructions-list">
        <li>Use Vue.js to create a responsive image gallery</li>
        <li>Use any plugins/packages that you need</li>
        <li>Feel free to choose your own project structure</li>
        <li>Once you finish it, please push it to Github and provide us the URL</li>
      </ul>

      <h3 class="instructions-title">Let's get started</h3>
      <ol class="instructions-list">
        <li>Use Open Sans from Google Fonts for the entire page</li>
      </ol>

      <h3 class="instructions-title">Header/Navigation</h3>
      <ol class="instructions-list">
        <li>
          Create a navigation:
          <br />- Home (route: /)
          <br />- Gallery (route: /gallery)
        </li>
        <li>Add a fixed 2-color 45° gradient background color</li>
      </ol>

      <h3 class="instructions-title">Gallery</h3>
      <ol class="instructions-list">
        <li>Load the JSON data (public/json/item-list.json) Vue-x recommended</li>
        <li>
          List each item in rows.
          <br />For viewport >= 1200px, have 4 items per row.
          <br />For viewport less than 576px, have 1 item per row
        </li>
        <li>Add a lazy load for the images</li>
      </ol>

      <h3 class="instructions-title">Gallery item</h3>
      <ol class="instructions-list">
        <li>Try to reproduce item style like concept (public/img/item-sample.png)</li>
        <li>Items must have a 16/9 aspect ratio</li>
        <li>The images are available under the public/img folder</li>
        <li>
          Use Font Awesome icons
          <br />- Select: check-circle
          <br />- Delete: times-circle
        </li>
      </ol>

      <h3 class="instructions-title">Functionalities (VueX recommended)</h3>
      <ol class="instructions-list">
        <li>Create a function to display the total items</li>
        <li>Add functionality on Remove button to delete item from list (No AJAX needed)</li>
        <li>
          Add functionality on Select/Unselect button.
          <br />On active state, entire item component should be 50% transparent.
          <br />On inactive state, entire item component should be opaque
        </li>
      </ol>

      <h3 class="instructions-title">Bonus</h3>
      <ol class="instructions-list">
        <li>Add 5 Jest Unit tests (you can use another test framework)</li>
        <li>Add CSS transitions to any (or all) hover state</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>


<style lang="scss" scoped>
.wrapper {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.instructions-title {
  margin: 30px 0 0 0;
}

.instructions-list {
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: left;
  background-color: rgba(#fff, 0.8);

  > li {
    margin: 0;
    padding: 5px 10px;

    &:nth-child(odd) {
      background-color: rgba(black, 0.1);
    }

    &:nth-child(even) {
      background-color: rgba(black, 0.3);
    }
  }
}
</style>
