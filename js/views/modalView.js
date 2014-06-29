var app = app || {};

app.modalView = Backbone.View.extend({

  model: app.singleListItem,

  className: "modal",

  template: _.template( $("#modalElement").html() ),

  render: function() {
    var itemTemplate = this.template(this.model.toJSON());
    this.$el.html(itemTemplate);
    return this;
  },

  events: {
  },

});

