var items = new app.ItemsCollection();

items.fetch();

listView = new app.ListView({ collection: items});

$("#salary-list").html(listView.render().el);
