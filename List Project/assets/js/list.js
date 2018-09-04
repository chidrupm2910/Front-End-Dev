$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});
 $("ul").on("click","span",function(event){

 	$(this).parent().fadeOut(500,function(){
 		$(this).remove();
 	});
 	 event.stopPropogation(); 
 });

 $("button").click(function(){
 	var todoText = $("input[type='text']").val();
    $("input[type='text']").val("");
 	$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText + "</li>");
 });