$(document).ready(function(e) {
    
	$("#bangalore").click(function(e) {
     
       $(".display2").show();
	    $(".display3").hide();
		 $(".display1").hide();
		  
	    
    });
	
	
	  
	$("#delhi").click(function(e) {
     
       $(".display3").hide();
	    $(".display1").show();
		 $(".display2").hide();
		  
	    
    });
	$("#mysore").click(function(e) {
     
       $(".display2").hide();
	    $(".display1").hide();
		 $(".display3").show();
		  
	    
    });
	
	
});
