<template>
  <div class="form">
    <label for="number">Enter a number:</label>
    <input 
      v-model="number"
      type="text"
      @keyup.enter="getTrivia(number)">
    <button @click="getTrivia(number)">Submit</button>
  </div>
</template>

<script>
export default {
  props: {
    getTrivia: {
      type: Function,
      required: true
    },
    theNumber: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      number: this.theNumber
    };
  }
};
</script>
