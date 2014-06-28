var app = app || {};

app.ListView = Backbone.View.extend({
  
  tagName: "ul",

  initialize: function() {
    //do this or fetch will run before items are added
    var self = this;
      this.collection.fetch().done(function(){
      self.render();
    });
  },

  render: function() {
    this.collection.each(this.addItem, this);
    return this;
  },

  addItem: function(item) {
    var itemView = new app.singleItemView({ model: item });
    this.$el.append(itemView.render().el);
  }

});
