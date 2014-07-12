var items = new app.ItemsCollection();

items.fetch();

listView = new app.ListView({ collection: items});

$("#salary-list").html(listView.render().el);

var salaryRouter = new app.Router();

Backbone.history.start();


///////////

// var callbacks = $.Callbacks();
// var dfd = $.Deferred();

// fnBar();

// callbacks.add(fnFoo); //EG fnFoo is now a callback function for something else
// callbacks.fire(); //INSTEAD OF CALLING ELSEWHERE


function fnFoo () {
  console.log('foo');
}

function fnDfdBar () {
  var deferred = $.Deferred(),
  barrer = function () {
    console.log('bar');
  };
  return deferred.promise();
}

(function(){
  var thing = fnDfdBar.done(function(){
     alert("done");
  }).progress(function(i){
     console.log("in progress...",i);
  });

}());

// function countThreeSeconds() {
//     var counter = 0,
//     deferred = $.Deferred(),
//     timer = setInterval(function () {

//         if (counter == 3) {
//             console.log("All done. That was three seconds.");
//             window.clearInterval(timer);
//             deferred.resolve();

//         } else {              
//             console.log("Not there yet. Counter at: " + counter);
//             deferred.notify(counter);
//         }
//         counter++;
//     }, 1000);
//     return deferred.promise();

// }

// (function(){
//   var timer = countThreeSeconds().done(function(){
//      alert("done");
//   }).progress(function(i){
//      console.log("in progress...",i);
//   });

// }());