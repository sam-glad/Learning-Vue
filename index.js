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