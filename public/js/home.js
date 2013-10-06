$(document).ready(function() {

	
    //urlバーを隠す
	window.scrollTo(0,1);

        $(".want_or_have").click(function () {
            $(".tgl_want").toggle();                
            $(".tgl_have").toggle();                
            $(".tgl").toggle();                
        });
        $(".checkbox").click(function () {
            if($(this).attr("src")=="img/_common/check_on.gif"){
                $(this).attr("src","img/_common/check.gif");
            }else{
                $(this).attr("src","img/_common/check_on.gif");
            }
        });
        $("#setting").click(function(){
            alert("チェックした項目をリストから削除しますか?")
        });

});
