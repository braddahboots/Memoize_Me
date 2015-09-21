var domAlert = (function() {
  //stores instance of object in cache
  var cache = {};

  //takes in object and checks to see if instance already has been cached
  //if it has been the index of the instance is returned.
  function f(obj) {
    console.log(cache);
    if(obj in cache) {
      console.log('suck it');
      return cache[obj];
    } else {
      //stores new instance into cache and returns DOM element
      console.log('shoots');
      cache[obj] = document.getElementById(obj);
      return cache[obj];
    }
  }
  return f;
})();