var app = app || {};

app.modalView = Backbone.View.extend({

  model: app.singleListItem,

  className: "modal",

  template: _.template( $("#modalElement").html() ),

  render: function() {
    var itemTemplate = this.template(this.model.toJSON());
    this.$el.html(itemTemplate);
    //initiate slider on created element
    this.$("#range-slider").noUiSlider({
      start: 90,
      range: {
      'min': 0,
      'max': 100
      },
      serialization: {
        lower: [
          $.Link({
            target: this.$("#foo")
            })
        ],
        format: {
          decimals: 1
        }
      }
    });
    this.$('#range-slider').on({
      slide: function(){
        // console.log($("#range-slider").val());
      },
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
