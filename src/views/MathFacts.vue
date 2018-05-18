<template>
  <section class="views">
    <p>This is interesting: {{ text }}</p>
    <trivia-form
      :get-trivia="getTrivia"
      :the-number="number"/>
  </section>
</template>

<script>
import TriviaForm from '@/components/TriviaForm.vue';

export default {
  components: {
    TriviaForm
  },
  data () {
      return {
        text: '',
        number: 32
      };
    },
  mounted: function () {
    this.getTrivia(this.number);
  },
  methods: {
    getTrivia (num) {
      const apiUrl = `http://numbersapi.com/${num}/math?json`;
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