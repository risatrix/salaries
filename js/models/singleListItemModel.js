var app = app || {};

  app.singleListItem = Backbone.Model.extend({
    idAttribute: 'KEY',
    defaults: {
      POSITION: "dogcatcher",
      LOW: 0,
      HIGH: 100,
      CAT: "foo",
      SLUG: "slug-goes-here"
  },


});
