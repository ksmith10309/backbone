(function($){
  var CounterView = Backbone.View.extend({    
    el: $('body'),
    events: {
      'click button#increment': 'increment',
      'click button#decrement': 'decrement'
    },
    initialize: function(){
      _.bindAll(this, 'render', 'increment', 'decrement');
      this.counter = 0;
      this.render();
    },
    render: function(){
      $(this.el).append("<button id='decrement'>Decrement</button>");
      $(this.el).append("<h2 class='zero'>"+this.counter+"</h2>");
      $(this.el).append("<button id='increment'>Increment</button>");
    },
    increment: function(){
      this.counter++;
      if (this.counter > 0) $("h2").attr("class", "positive");
      if (this.counter < 0) $("h2").attr("class", "negative");
      if (this.counter === 0) $("h2").attr("class", "zero");
      $("h2").text(this.counter);
    },
    decrement: function(){
      this.counter--;
      if (this.counter > 0) $("h2").attr("class", "positive");
      if (this.counter < 0) $("h2").attr("class", "negative");
      if (this.counter === 0) $("h2").attr("class", "zero");
      $("h2").text(this.counter);
    }
  });
  var counterView = new CounterView();      
})(jQuery);
