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