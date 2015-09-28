// Javascript for handling site menus
$(document).ready(function() {
        console.log("Helooo");
        $("#hydromenu-btn").hover(
           function() {
              console.log("I was clicked!!");
              $("#hydromenu").show();
           }
        );
 
        $(".menu").mouseleave(function() {
          $(this).hide();
        });
});
