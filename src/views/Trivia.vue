<template>
  <section class="views">
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
      text: '',
      number: 42
    };
  },
  mounted: function () {
    this.getTrivia();
  },
  methods: {
    getTrivia () {
      let apiUrl = `http://numbersapi.com/${this.number}?json`;
      fetch(apiUrl)
        .then(Response => Response.json())
        .then(Response => {
          this.text = Response.text;
          this.number = Response.number;
        });
    }
  }
};
</script>