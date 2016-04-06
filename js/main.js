requirejs.config({
  paths: {
    "jquery": "libs/jquery-1.12.2.min",
    "geral": "script"
  }
});
require(["jquery"],function(){
    //console.log('jQuery Rodando !!!');
    require(["geral"]);
});