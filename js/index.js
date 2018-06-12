new Vue({
  el : '#app',
  data : {
    name : 'PJAP',
    counter : 0,
    secondCounter : 0
  },
  methods: {
    result() {
      console.log('Method');
      return this.counter > 5 ? 'Greater Than 5' : 'Smaller Than 5'
    }
  },
  computed: {
    output() {
      console.log('Computed');
      return this.counter > 5 ? 'Greater Than 5' : 'Smaller Than 5'
    }
  },
  watch: {
    counter(value) {
      var vm = this;
      setTimeout(function() {
        vm.counter = 0;
      }, 2000)
    }
  }
})
