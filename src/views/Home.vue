<template>
  <section class="views">
    
    <h1>Number Trivia!</h1>
    <img src="https://picsum.photos/800/200?image=175">
   
    <h4>What can you learn from a number? Well, a lot.</h4>
    <h4 class="brochure">This number trivia generator uses the
      <a
        class="ref-link"
        href="http://numbersapi.com"
        target="_blank">
      Numbers API</a>. By using the navigation above, you can make a request for three different types of number trivia:
      <ul>
        <li>Trivia based off of a specified number</li>
        <li>Trivia based on a mathematical fact about a specified number</li>
        <li>Trivia based on a specified month and date</li>
      </ul>
      You can use this app to wow your friends and family with the useful knowledge, or be "that" person. Now, go learn something! [th]
    </h4>
  </section>
</template>

<style>
ul {
  list-style: square;
}
img {
  width: 60%;
  border: 1px whitesmoke solid;
  border-radius: 25px;
}

.ref-link {
  color: #2c3e50;
}

.ref-link:hover {
  font-style: italic;
}

.brochure {
  width: 60%;
  text-align: left;
}
</style>
