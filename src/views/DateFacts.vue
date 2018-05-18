<template>
  <section class="views">
    <p>This is interesting: {{ text }}</p>
    <img
      :src="images[2]['2']"
      alt="dates are fun">
    <div class="form">
      <label for="month">Month:</label>
      <input
        v-model="month"
        type="text"
        @keyup.enter="getTrivia">
      <label for="day">Day:</label>
      <input
        v-model="day"
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
      month: 5,
      day: 13,
      images: []
    };
  },
  mounted: function () {
    this.getTrivia();
  },
  methods: {
    getTrivia () {
      const apiUrl = `http://numbersapi.com/${this.month}/${this.day}?json`;
      fetch(apiUrl)
        .then(Response => Response.json())
        .then(Response => {
          this.text = Response.text;
          this.number = Response.number;
        });
      this.getImage();
    },
    getImage () {
      const apiUrl = './numberimages.json';
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