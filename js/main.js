$(function(){
	$("body").on('click', '[href*="#"]', function(e){
		var fixed_offset = 0;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1200);
		e.preventDefault();
	});
});