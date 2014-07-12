var app = app || {};

app.Router = Backbone.Router.extend({

  routes:{

    ":slug" : 'openModal'

  },

  defaultRoute: function(routeId) {
     // console.log( 'You clicked route "' + routeId + '"');
  },

  openModal: function (slug) {
    console.log("slug = " + slug);
    // console.log(items);
    // var item = collection.get(id);
    // items.on("reset", function(collection, response){

    //   var item = collection.get(id);
    //   console.log(item.toJSON());
    //   modal = new app.modalView(item);
    //   // App.showPerson(person);
    // });
    // console.log(items);
    // var thing = items.get(1);
    // console.log(thing;)
    // var self = this;
    // modal = new app.modalView({ slug: slug} );
    // server.fetch(slug);
    // this.loadView(modal);
    // console.log(this.model)
    // modal = new app.modalView({ model: this.model});
    // console.log(modal);
    // $("#modal").html(modal.render().el);
  },

  // loadView: function(view) {
  //   this.view && (this.view.kill ? this.view.kill() : this.view.remove());
  //   this.view = view;
  // }


});

