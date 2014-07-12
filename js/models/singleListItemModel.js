var app = app || {};

  app.singleListItem = Backbone.Model.extend({
    idAttribute: 'KEY',
    defaults: {
      POSITION: "dogcatcher",
      LOW: "cheap",
      HIGH: "cheaper",
      CAT: "blah",
      SLUG: ""
  },

  url: function () {
    return '/' + this.slug;
  },

 parse: function (response) {
    //get slug from position title
    pos = response.POSITION;
    slug = convertToSlug(pos);
    function convertToSlug(Text) {
      return Text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
        ;
    }
    //add created slug to model after fetching
    return {
      ID: response.KEY,
      SLUG: slug,
      POSITION: response.POSITION,
      HIGH: response.HIGH,
      LOW: response.LOW,
      CAT: response.CAT
    }
  },

});