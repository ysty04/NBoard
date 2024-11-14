$(document).ready(function(){ 
      $.get("src/components/menu.html", function(data) {
        $("#menu").html(data);
      });
});