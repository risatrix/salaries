$.getJSON("http://localhost:8080/salaries.json", function(data) {
  for (i=0; i < data.salaries.length; i++) {
    new app.singleListItem({
      position: data.salaries[i].POSITION,
      lo: data.salaries[i].LOW,
      hi: data.salaries[i].HIGH
    });
    // $('.salary_list').append(data.salaries[i].POSITION);
  }
});

