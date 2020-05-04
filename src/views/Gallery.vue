<template>
  <div class="gallery">
    <h1>Gallery</h1>
    <h2>
      There are {{ count }} items ({{ countSelectedImages }} selected) -
      <i
        class="fas fa-trash"
        v-bind:class="{ selected: countSelectedImages == 0 }"
        v-on:click="deleteSelectedImages()"
      ></i>
    </h2>
    <div class="gallery-items">
      <GalleryItem
        v-for="image in images"
        v-bind:key="image.id"
        v-bind:id="image.id"
        v-bind:title="image.title"
        v-bind:img="image.img"
        v-bind:isSelected="image.isSelected"
      ></GalleryItem>
    </div>
  </div>
</template>

<script>
import GalleryItem from "./GalleryItem.vue";
export default {
  name: "Gallery",
  components: {
    GalleryItem
  },
  computed: {
    count() {
      return this.$store.state.images.length;
    },
    countSelectedImages() {
      return this.$store.getters.countSelectedImages;
    }
  },
  props: {
    images: {
      type: Array,
      default() {
        return this.$store.state.images;
      }
    },
    index: {
      type: Number
    }
  },
  methods: {
    deleteSelectedImages: function() {
      this.$store.dispatch("deleteSelectedImages");
    }
  }
};
</script>

<style lang="scss" scoped>
div.gallery-items {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
}
</style>
