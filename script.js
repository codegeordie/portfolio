
// Smooth scrolling function
$("nav a").click(function(){
	var href = $.attr(this, "href");
	$("html, body").animate({
    	scrollTop: $($.attr(this, "href")).offset().top
	}, 500);
	return false;
});


// Disables hover effects on touch devices
document.addEventListener("touchstart", function addtouchclass(e){
    document.documentElement.classList.add("is-touch");
    document.removeEventListener("touchstart", addtouchclass, false);
}, false);


