$(document).ready(function(){
    // toggle section-content
    $(".section-content").hide();
    
});
$(document).ready(function(){
    // Show hidden paragraphs
    $(".section-header").click(function(){
        $(this).next(".section-content").toggle();
    });
});



function show(id) {
	
	var x=document.getElementById(id);
	 $(x).click;

}