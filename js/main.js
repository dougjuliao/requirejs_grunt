requirejs.config({
  paths: {
    "jquery": "js/libs/jquery-1.12.2.min",
    "script": "js/script"
  }
});
require(["jquery","script"],function(){
    //console.log('jQuery Rodando !!!');
    //require(["script"]);
});