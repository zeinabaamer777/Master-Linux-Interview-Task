$(function(){
      $(".sidebar-dropdown > a").click(function() {
        $(".sidebar-submenu").slideUp(200);
        if ($(this).parent().hasClass("active")) 
        {
          $(".sidebar-dropdown").removeClass("active");
          $(this)
            .parent()
            .removeClass("active");
        } else {
          $(".sidebar-dropdown").removeClass("active");
          $(this)
            .next(".sidebar-submenu")
            .slideDown(200);
          $(this)
            .parent()
            .addClass("active");
        }
      });

      $(".third-sidebar-dropdown > a").click(function() {
        $(".third-sidebar-submenu").slideUp(200);
        if ($(this).hasClass("active")) 
        {
          $(".third-sidebar-dropdown").removeClass("active");
          $(".third-sidebar-submenu").css("display", "none");
        } 
        else {
          $(".third-sidebar-dropdown").addClass("active");
          $(".third-sidebar-submenu").css("display", "block");
        }
      });
      

      $("#close-sidebar").click(function() {
        $(".page-wrapper").removeClass("toggled");
      });
      $("#show-sidebar").click(function() {
        $(".page-wrapper").addClass("toggled");
      });
      
})