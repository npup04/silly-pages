jQuery(document).ready(function($) {
  $('#button_1').on('click', function(){
    App.changeColor();
  });
});

var App = App || {};

App.changeColor = function(){
  this.css({
    background-color: #f33;
  });
};
