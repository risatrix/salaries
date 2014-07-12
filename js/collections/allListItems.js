var app = app || {};

app.ItemsCollection = Backbone.Collection.extend({

  model: app.singleListItem,

  url: '/salaries.json',

});
