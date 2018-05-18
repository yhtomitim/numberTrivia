import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import MathFacts from './views/MathFacts.vue';
import Trivia from './views/Trivia.vue';
import DateFacts from './views/DateFacts.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/math',
      name: 'math',
      component: MathFacts
    },
    {
      path: '/trivia',
      name: 'trivia',
      component: Trivia
    },
    {
      path: '/date',
      name: 'date',
      component: DateFacts
    }
  ]
});
