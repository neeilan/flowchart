(function($){
	$.fn.fc = function (animateIn,animateOut, delay, preserveParentCards)
	{
			// Reset state at start
			$(".fc-card").hide();
			$("#fc-home").hide();
			$("#fc-back").hide();
			$("#fc-main").show();

			// History stack and obj maintaining each card's visible children
	    var history = ["#fc-main"];
			var children = {};

	    if(!delay || delay<0){
	         delay=500;
	    }

	     $(".fc-btn").click(function() {
	      var parent = $(this).parent();
				// Hide all children that might be visible
				hideAllChildren("#" + parent.attr("id"));
				//prevent multiple clicks
	      $(".fc-btn").attr("disabled", "true");

				if (!preserveParentCards){
	      	parent.removeClass(animateIn).addClass(animateOut);
				}

	      var nextId = "#C" + $(this).attr("id").substring(1);
				// update history and children
	      history.push(nextId);
				children["#" + parent.attr("id")] = [];
				children["#" + parent.attr("id")].push(nextId);

	      setTimeout(function() {
					if (!preserveParentCards){
	        	parent.hide();
					}
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
				 // if parent cards aren't hideen, back functionality disabled

				 if (!preserveParentCards){
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
				}
	    })

			function hideAllChildren(id){
				// As of now, each card has only one active child
				// ex - one active answer to a question, but >1 children/grandchildren
				// can be hidden recursively here
				var cardsChildren = children[id];
				if (cardsChildren){
					$(cardsChildren[0]).hide();
					hideAllChildren(cardsChildren[0]);
				}
				delete children[id];
			}
			
	}
}(jQuery));
