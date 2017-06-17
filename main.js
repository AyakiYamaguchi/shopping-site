$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
});


$(document).ready(function(){
    $("#humberger_menu").click(function(){
        $(".sp_list").slideToggle();
      });
    });
    
$(document).ready(function(){
    $("#pagelink").click(function(){
        $("#pagelink_list").slideToggle();
        $("#pagelink_icon").toggle();
        $("#pagelink_down_icon").toggle();
      });
    });
    

$(document).ready(function(){
    $("#categories").click(function(){
        $("#categories_list").slideToggle();
        $("#categories_icon").toggle();
        $("#categories_down_icon").toggle();
      });
    });
    
    
$(window).load(function(){
  $("#list_img img").click(function(){
    var img_src = $(this).attr("src");
    $("#display_img img").attr("src", img_src);
  });
});