(function($){
	$.fn.tree = function (animateIn,animateOut, delay){
		if(!delay || delay<0){
			delay=500;
		}
		$(".tree-btn").click(function() {
		var parent = $(this).parent();
        $(".tree-btn").attr("disabled", "true"); //prevent multiple clicks
  
        parent.removeClass(animateIn).addClass(animateOut);
        var nextId = "#C" + $(this).attr("id").substring(1);
        setTimeout(function() {
        	parent.hide();
        	$(nextId).addClass(animateIn).show();
        	$(".tree-btn").removeAttr("disabled");
        }, delay);
    });
	}
}(jQuery));		
