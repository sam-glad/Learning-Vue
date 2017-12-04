const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello, Vue!'
  }
});

const app2 = new Vue({
  el: '#app-2',
  data: {
    message: `This page was loaded on/at: ${new Date().toLocaleString()}`
  }
});

const app3 = new Vue({
  el: '#app-3',
  data: {
    seen:true
  }
});

const app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { name: 'Learn JavaScript' },
      { name: 'Learn Vue' },
      { name: 'Build something worth being proud of' }
    ]
  }
});

const app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Howdy'
  },
  methods: {
    // SYNTAX NOTE https://gist.github.com/JacobBennett/7b32b4914311c0ac0f28a1fdc411b9a7
    reverseMessage() {
      this.message = this.message.split('').reverse().join('');
    }
  }
});

const app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Здравствуйте'
  }
});

/************************************************************************/

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

const app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 1, text: 'Vegetables' },
      { id: 2, text: 'Cheese' },
      { id: 3, text: 'More cheese' },
    ]
  }
});