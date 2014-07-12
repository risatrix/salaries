var app = app || {};

app.Router = Backbone.Router.extend({

  routes:{

    ":slug" : 'openModal'

  },

  openModal: function (slug) {

    console.log("slug = " + slug);

  },


});

