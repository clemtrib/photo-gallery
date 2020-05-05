<template>
  <div class="gallery-item">
    <div class="container" ref="container">
      <a :href="link">
        <AppImage :lazy-src="img" :lazy-srcset="img" v-bind:class="{ selected: isSelected }" />
      </a>
      <i
        v-bind:class="{ selected: !isSelected }"
        class="fas fa-check-circle bottomright"
        v-on:click="selectImage(id)"
      ></i>
      <i class="fas fa-times-circle bottomleft" v-on:click="deleteImage(id)"></i>
    </div>
  </div>
</template>

<script>
import AppImage from "./AppImage.vue";
export default {
  name: "GalleryItem",
  props: ["id", "title", "img", "isSelected"],
  components: {
    AppImage
  },
  computed: {
    link() {
      return "image/" + this.$props.id;
    }
  },
  methods: {
    selectImage: function(id) {
      if (this.$store.getters.getImageById(id).isSelected) {
        this.$store.getters.getImageById(id).isSelected = false;
      } else {
        this.$store.getters.getImageById(id).isSelected = true;
      }
    },
    deleteImage: function(id) {
      console.log("delete: " + id);
      this.$store.dispatch("deleteImage", {
        id: id
      });
    }
  }
};
</script>

<style  lang="scss" scoped>
img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

div.gallery-item {
  width: 50%;
}

@media screen and (min-width: 1200px) {
  div.gallery-item {
    width: 25%;
  }
}

@media screen and (max-width: 571px) {
  div.gallery-item {
    width: 100%;
  }
}

.bottomright,
.bottomleft {
  position: absolute;
  bottom: 16px;
  font-size: 2em;
}

.bottomright {
  right: 16px;
}

.bottomleft {
  opacity: 50%;
  left: 16px;

  &:hover {
    opacity: 100%;
    left: 16px;
  }
}
</style>
