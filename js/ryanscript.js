$(document).ready(function () {	
	//$('.content_type').hide();
	//$('#about').show();
	//$('#about_link').addClass('selected_tab');
	
	$('.nav_link').mouseenter(function(){
		//if(!$(this).hasClass('selected_tab') == true){
			$(this).addClass('highlighted_tab');
		//}
	});

	$('.nav_link').mouseleave(function(){
		$('.nav_link').removeClass('highlighted_tab');
	});

	$(".nav_link").click(function(){
	    $('.nav_link').removeClass('selected_tab');
    	$(this).addClass("selected_tab");
	});
	/*
	$('#about_link').click(function() {
  		$('.content_type').hide();
  		$('#about').slideDown();
	});
	$('#resume_link').click(function() {
  		$('.content_type').hide();
  		$('#resume').slideDown();
	});
	$('#links_link').click(function() {
  		$('.content_type').hide();
  		$('#links').slideDown();
	});
	$('#projects_link').click(function() {
  		$('.content_type').hide();
  		$('#projects').slideDown();
	});
	$('#contact_link').click(function() {
  		$('.content_type').hide();
  		$('#contact').slideDown();
	});
	*/
});