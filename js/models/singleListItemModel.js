var app = app || {};

app.singleListItem = Backbone.Model.extend({
  initialize: function() {
    //acknowledge creation
    console.log("A model instance named " + this.get("position") + " has been created and it costs " + this.get("hi"));
    //watch for changes
    this.on('change', function(){
      console.log("Zounds! Something in our model has changed!");
    });
  }
});