$(document).ready(function() {
	$(".remove-close").click(function(){
		$(".sidebar-menu").addClass("hide-menu");
		$(".toggle-menu").addClass("opacity-one");
	});

	$(".icon-show").click(function(){
		$(".sidebar-menu").removeClass("hide-menu");
		$(".toggle-menu").removeClass("opacity-one");
	});
});