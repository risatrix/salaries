var app = app || {};

app.modalView = Backbone.View.extend({

  model: app.singleListItem,

  className: "modal",

  template: _.template( $("#modalElement").html() ),

  render: function() {
    var itemTemplate = this.template(this.model.toJSON());
    this.$el.html(itemTemplate);
    this.$("#range-slider").noUiSlider({
      start: 40,
      range: {
      'min': 0,
      'max': 100
      }
    });
    return this;
  },

  events: {
    'click .close' : 'closeModal'
  },

  closeModal: function() {
    this.remove();
    salaryRouter.navigate('/', {trigger: true});
  }

});
