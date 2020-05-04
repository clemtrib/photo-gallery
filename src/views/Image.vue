<template>
  <div class="gallery">
    <div class="container">
      <h3>{{ title }}</h3>
      <img :src="src" alt="title" />
    </div>
    <div class="command">
      <a v-if="linkPreviousImage" :href="linkPreviousImage">
        <i class="fas fa-chevron-circle-left"></i>
      </a>
      <a href="/gallery">
        <i class="fas fa-circle"></i>
      </a>
      <a v-if="linkNextImage" :href="linkNextImage">
        <i class="fas fa-chevron-circle-right"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryImage",
  computed: {
    src() {
      return this.$store.getters.getImageById(this.$route.params.id).img;
    },
    title() {
      return this.$store.getters.getImageById(this.$route.params.id).title;
    },
    linkPreviousImage() {
      let image = this.$store.getters.getPreviousImageById(
        this.$route.params.id
      );
      return image !== null ? image.id : false;
    },
    linkNextImage() {
      let image = this.$store.getters.getNextImageById(this.$route.params.id);
      return image !== null ? image.id : false;
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  max-width: 1050px;
  max-height: 700px;
}

.container {
  width: fit-content;

  h3 {
    position: absolute;
    padding: 5px;
    width: calc(100% - 10px);
    top: 0;
    left: 0;
    background-color: black;
    opacity: 50%;
    font-weight: 100;

    &:hover {
      -webkit-transition: opacity 2s ease-in-out;
      -moz-transition: opacity 2s ease-in-out;
      -ms-transition: opacity 2s ease-in-out;
      -o-transition: opacity 2s ease-in-out;
      opacity: 0;
    }
  }
}

.command {
  margin: auto;
  width: fit-content;
  display: flex;
  font-size: 2em;

  a {
    margin: 10px 20px;
  }
}

.fas {
  opacity: 50%;

  &:hover {
    opacity: 100%;
  }
}
</style>
