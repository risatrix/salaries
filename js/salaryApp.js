var items = new app.ItemsCollection([]);

$.getJSON("http://localhost:8080/salaries.json", function(data) {
  for (i=0; i < data.salaries.length; i++) {
    var new_item = new app.singleListItem({
      position: data.salaries[i].POSITION,
      lo: data.salaries[i].LOW,
      hi: data.salaries[i].HIGH
    });
    items.add(new_item);
    console.log(items)
    // $('.salary_list').append(data.salaries[i].POSITION);
  }
});

