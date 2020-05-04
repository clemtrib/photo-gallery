import Vue from 'vue';
import Vuex from 'vuex';

import images from '../public/json/item-list.json';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      images: images.items
    },
    mutations: {
      DELETE_IMAGE(state, id){
        let index = state.images.findIndex(image => image.id == id);
        state.images.splice(index, 1);
       }
    },
    getters: {
      selectedImages: state => {
        return state.images.filter(image => image.isSelected)
      },
      countSelectedImages: (state, getters) => {
        return getters.selectedImages.length
      },
      getImageById: (state) => (id) => {
        return state.images.find(image => image.id == id)
      },
      getPreviousImageById: (state) => (id) => {
        let index =  state.images.findIndex(image => image.id == id);
        index = --index;
        return index >= 0 ? state.images[index] : null;
      },
      getNextImageById: (state) => (id) => {
        let index =  state.images.findIndex(image => image.id == id);
        index = ++index;
        return index < state.images.length ? state.images[index] : null;
      }
    },
    actions: {
      deleteSelectedImages ({commit, getters}) {
        getters.selectedImages.forEach(image => commit('DELETE_IMAGE', image.id));
      },
      deleteImage ({commit}, params) {
        commit('DELETE_IMAGE', params.id)
      }
    },
});
