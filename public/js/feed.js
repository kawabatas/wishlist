$(document).ready(function() {

	
    //urlバーを隠す
	window.scrollTo(0,1);

        $("input[type='checkbox']").change(function(){
            if($(this).is(":checked")){
                $(this).parent().addClass("c_on");
            }else{
                $(this).parent().removeClass("c_on");
            }
        });

});
