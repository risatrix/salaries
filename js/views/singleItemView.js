var app = app || {};

app.singleItemView = Backbone.View.extend({

  tagName: "li",

  template: _.template( $("#itemElement").html() ),

  render: function() {
    var itemTemplate = this.template(this.model.toJSON());
    this.$el.html(itemTemplate);
    return this;
  },

  events: {
    'click a': 'openModal',
  },

  openModal: function (e) {
    salaryRouter.navigate('/', {trigger: true});
    //original list-only view
    // e.preventDefault();
    // modal = new app.modalView({ model: this.model} );
    // $("#modal").html(modal.render().el);
  }

});
