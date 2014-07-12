//Source:
//http://lostechies.com/derickbailey/2012/02/07/rewriting-my-guaranteed-callbacks-code-with-jquery-deferred

var app = app || {};

app.Callbacks = function(){
  this.deferred = $.Deferred();
  this.promise = this.deferred.promise();
};

_.extend(app.Callbacks.prototype, {
  
  // Add a callback to be executed. Callbacks added here are
  // guaranteed to execute, even if they are added after the 
  // `run` method is called.
  add: function(callback){
    this.promise.done(function(context, options){
      callback.call(context, options);
    });
  },

  // Run all registered callbacks with the context specified. 
  // Additional callbacks can be added after this has been run 
  // and they will still be executed.
  run: function(context, options){
    this.deferred.resolve(context, options);
  }
});