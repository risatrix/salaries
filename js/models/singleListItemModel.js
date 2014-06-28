var app = app || {};

  app.singleListItem = Backbone.Model.extend({
    idAttribute: 'KEY',
    defaults: {
      POSITION: "dogcatcher",
      LOW: "cheap",
      HIGH: "cheaper",
      CAT: "blah"
    },
});