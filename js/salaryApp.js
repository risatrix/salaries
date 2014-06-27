$.getJSON("http://localhost:8080/salaries.json", function(data) {
  console.log(data);
  for (i=0; i < data.salaries.length; i++) {
    $('.salary_list').append(data.salaries[i].POSITION);
  }
});