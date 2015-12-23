
$(document).ready(function() {

	//Initial setup - Adding the active class
	$(".slides").first().addClass("active");

	//Hide all slides
	$(".slides").hide();
	$(".active").show();
	
	$("#next").click(function() {
		//$(".active").removeClass("active").addClass("oldActive");
		//$(".oldActive").next().addClass(".active");

		$(".active").addClass("oldActive");
		$(".oldActive").hide();
		$(".oldActive").next().addClass("active1");
		$(".active1").show();

		

	});

});