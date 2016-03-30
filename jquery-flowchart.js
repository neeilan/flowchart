(function($){
	$.fn.fc = function (animateIn,animateOut, delay){
		if(!delay || delay<0){
			delay=500;
		}
		$(".fc-btn").click(function() {
		var parent = $(this).parent();
        $(".fc-btn").attr("disabled", "true"); //prevent multiple clicks
  
        parent.removeClass(animateIn).addClass(animateOut);
        var nextId = "#C" + $(this).attr("id").substring(1);
        setTimeout(function() {
        	parent.hide();
        	$(nextId).addClass(animateIn).show();
        	$(".fc-btn").removeAttr("disabled");
        }, delay);
    });
	}
}(jQuery));		
