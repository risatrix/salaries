var app = app || {};

app.Router = Backbone.Router.extend({

  routes:{
    "" : "ListView",
    ":slug" : 'itemLookup'

  },

  ListView: function () {

    var items = new app.ItemsCollection();
    items.fetch({reset: true});
    listView = new app.ListView({ collection: items});
    $("#salary-list").html(listView.render().el);

  },

  itemLookup: function(slug) {

    var items = new app.ItemsCollection();
    items.fetch({reset: true}).done(function(){
      var item = items.findWhere({
        SLUG: slug
      });
      console.log(item);
      modal = new app.modalView({ model: item });
      $("#modal").html(modal.render().el);
    });

  }

});

