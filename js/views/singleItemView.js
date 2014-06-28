var app = app || {};

app.singleItemView = Backbone.View.extend({
  
  tagName: "li",

  template: _.template( $("#itemElement").html() ),

  render: function() {
    var itemTemplate = this.template(this.model.toJSON());
    this.$el.html(itemTemplate);
    return this;
  }

});
