<template>
  <header>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/trivia">Trivia</router-link> |
      <router-link to="/math">Math Trivia</router-link> |
      <router-link to="/date">Date Trivia</router-link>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 60%;
}

#nav {
  margin-top: 2%;
  padding: 2% 0%;
  width: 100%;
  background-color: #C7CCB9;
  border: 1px solid whitesmoke;
  border-radius: 25px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  font-weight: 900;
  color: #1c2e3f;
}

 #nav a:hover {
   font-weight: 900;
  color: #1c2e3f;
 }

</style>
