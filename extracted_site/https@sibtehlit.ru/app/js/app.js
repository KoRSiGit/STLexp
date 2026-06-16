function goanim(){
    if (jQuery(".goanim").length > 0) {
      jQuery(".goanim").each(function(){
        if (
          jQuery(window).scrollTop()+(window.innerHeight) > jQuery(this).offset().top &&
          jQuery(window).scrollTop()-(window.innerHeight) < jQuery(this).offset().top
        ) {
          jQuery(this).removeClass("goanim");
        }
        else if (
          jQuery(this).hasClass("footan") &&
          jQuery(window).scrollTop()+window.innerHeight > jQuery("body").height()-100
        ) {
          jQuery(this).removeClass("goanim")
        }
      });
    }
  };

$(document).ready(function(){
    $('#navbar').sticky({zIndex:999999});
    // sg
    setTimeout(function(){
        goanim();
      },250);
      jQuery(window).on("scroll",function(){
        goanim();
      });
      $(document).ajaxStop(function(){
          goanim();
      })
      
       
      
    //
});

$(document).on("change", "#selyear", function(){
    var link = $(this).val();
    window.location.href = link;
});

$(document).on("click", ".oep-visible", function(){
    $(this).closest(".oep-block__block").toggleClass("obb-hidden");
});
// выбор предложения в всплывающем окне
$(document).on("click", "#modalEquipment .eb", function(){
    var eqtext = $(this).find(".eqm--header").text();
    $("#choosedEquipment").val(eqtext);
    $("#spanChoosedEq").text("Получить информацию об услуге '"+eqtext+"'");
})