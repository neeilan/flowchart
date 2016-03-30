(function($){
	$.fn.fc = function (animateIn,animateOut, delay){
     
        var history = ["#fc-main"];
        
        if(!delay || delay<0){
         delay=500;
     }

     $(".fc-btn").click(function() {
      var parent = $(this).parent();
        $(".fc-btn").attr("disabled", "true"); //prevent multiple clicks
        parent.removeClass(animateIn).addClass(animateOut);
        var nextId = "#C" + $(this).attr("id").substring(1);
        history.push(nextId);
        console.log(history);
        
        setTimeout(function() {
        	parent.hide();
        	$(nextId).addClass(animateIn).show();
        	$(".fc-btn").removeAttr("disabled");
            $("#fc-home").show();
            $("#fc-back").show();
        }, delay);
    });

     $("#fc-home").click(function() {
        $("#fc-home").hide();
        $("#fc-back").hide();
        history = ["#fc-main"];
        $(".fc-card").addClass(animateOut);
        setTimeout(function() {
            $(".fc-card").hide();
            $("#fc-main").show();
            $(".fc-card").removeClass(animateOut).addClass(animateIn);

        }, delay);
    })

     $("#fc-back").click(function() {
        history.pop();
        $(".fc-card").addClass(animateOut);
        setTimeout(function() {
            $(".fc-card").hide();
            if (history.length > 1) {
                $(history[history.length - 1]).show();
            } else {
                $("#fc-main").show();
                $("#fc-home").hide();
                $("#fc-back").hide();
                history = ["#fc-main"];
            }
            $(".fc-card").removeClass(animateOut).addClass(animateIn);
        }, delay);
    })
 }
}(jQuery));		
