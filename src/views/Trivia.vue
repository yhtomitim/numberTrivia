<template>
  <section class="views">
    <transition name="fade">
      <img
        v-if="show"
        :src="images[0]['0']"
        alt="numbers are fun">
    </transition>
    <p>This is interesting: {{ text }}</p>
    <div class="form">
      <label for="number">Enter a number: </label>
      <input
        v-model="number"
        type="text"
        @keyup.enter="getTrivia">
      <button @click="getTrivia">Submit</button>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      text: '',
      number: 42,
      images: []
    };
  },
  mounted: function () {
    this.getTrivia();
    this.getImage();
  },
  methods: {
    getTrivia () {
      let apiUrl = `http://numbersapi.com/${this.number}?json`;
      fetch(apiUrl)
        .then(Response => Response.json())
        .then(Response => {
          this.text = Response.text;
          this.number = Response.number;
          this.show = !this.show;
        });
    },
    getImage () {
      const apiUrl = './numberImages.json';
      fetch(apiUrl)
        .then(Response => Response.json())
        .then(Response => {
          this.images = [];
          Response.imageUrls.forEach(index => this.images.push(index));
        });
    }

  }
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
