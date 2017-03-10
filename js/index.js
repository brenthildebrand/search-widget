  $(document).ready(function() {
    var words = [];

    $(".icon").click(function() {
      
      $(".search_container").toggleClass("search_container_active");
      $(".icon").toggleClass("icon_active");
      $(".search_input").toggleClass("search_input_active");
      
      if ($(".search_input").hasClass("search_input_active")) {
        
        $(".search_input").attr("contenteditable", "true").focus();
        
      } else if ($(".search_input").html() !== "") {
        
        words.push($(".search_input").html());
        
        $(".words_container").append("<div class='words'>" + $(".search_input").html() + " <span class='delete'>&#9746;</span></div>");
        
        $(".search_input").attr("contenteditable", "false").html("");

      }
    });
    
          $(".words_container").on("click", ".delete", function(){
            $(this).parent().parent().remove();
          });

  });