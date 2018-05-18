<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
html {
  width: 100%;
  height: 100%;
  background: linear-gradient(to left,#C7CCB9, #87A878);
  background-repeat: no-repeat;
}

#app {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.views {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-top: 2%;
}

.views p {
  margin-top: 5%;
  width: 50%;
  padding: 2% 2%;
  text-align: center;
  background-color: #C7CCB9;
  border: 1px solid black;
  border-radius: 25px;
  box-shadow: 5px 5px grey;
}

.form {
  padding-top: 5%;
}

.form input {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background-color: whitesmoke;
}

.form button {
  font-size: 12px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

</style>
