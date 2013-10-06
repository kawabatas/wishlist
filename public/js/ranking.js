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

        function switchStar(_this,originalStar){
            _this = $(_this);
            if(originalStar==_this.attr('src')){
                _this.attr('src','img/_common/btn_hoshi_on.png');
            }else{
                _this.attr('src',originalStar);
            }
        }

});
