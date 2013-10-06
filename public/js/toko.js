$(document).ready(function() {

	
    //urlバーを隠す
	window.scrollTo(0,1);

    $("#main .toko .top .item textarea").focus(function(){
        $(this).removeClass("c5");
        $(this).addClass("29");
    }).blur(function(){
        if(this.val==""){
            $(this).removeClass("29");
            $(this).addClass("c5");            
        }
    });
    $(".toggle_button").click(function () {
        // $(this).attr("src","img/03_toukou/toko_minus.gif");
        $(".toggle_button").toggle();
        $(".item_detail").toggle();
    });
    $(".item_detail input").focus(function(){
        $(this).removeClass("c5c5");
        $(this).addClass("2929");
    }).blur(function(){
        if(this.val=""){
            $(this).removeClass("2929");
            $(this).addClass("c5c5");                
        }
    });

    $(".hoshi").click(function () {
        if($(this).attr("src")=="img/03_toukou/toko_hoshi.gif"){
            var id = $(this).attr("id");
            console.log(id);
            switch(id){
                case "hoshi_1":
                    $(this).attr("src","img/03_toukou/toko_hoshi_on.gif");
                    break;
                case "hoshi_2":
                    $(this).attr("src","img/03_toukou/toko_hoshi_on.gif");
                    $("#hoshi_1").attr("src","img/03_toukou/toko_hoshi_on.gif");
                    break;
                case "hoshi_3":
                    $(this).attr("src","img/03_toukou/toko_hoshi_on.gif");
                    $("#hoshi_2").attr("src","img/03_toukou/toko_hoshi_on.gif");
                    $("#hoshi_1").attr("src","img/03_toukou/toko_hoshi_on.gif");
                    break;
                case "hoshi_4":
                    $(this).attr("src","img/03_toukou/toko_hoshi_on.gif");
                    $("#hoshi_3").attr("src","img/03_toukou/toko_hoshi_on.gif");
                    $("#hoshi_2").attr("src","img/03_toukou/toko_hoshi_on.gif");
                    $("#hoshi_1").attr("src","img/03_toukou/toko_hoshi_on.gif");
                    break;
                case "hoshi_5":
                    $(this).attr("src","img/03_toukou/toko_hoshi_on.gif");
                    $("#hoshi_4").attr("src","img/03_toukou/toko_hoshi_on.gif");
                    $("#hoshi_3").attr("src","img/03_toukou/toko_hoshi_on.gif");
                    $("#hoshi_2").attr("src","img/03_toukou/toko_hoshi_on.gif");
                    $("#hoshi_1").attr("src","img/03_toukou/toko_hoshi_on.gif");
                    break;
                default:
                    // console.log("default");
                    // $(this).attr("src","img/03_toukou/toko_hoshi_on.gif");
                    break;
            }
        }else{
            var id = $(this).attr("id");
            console.log(id);
            switch(id){
                case "hoshi_5":
                    $(this).attr("src","img/03_toukou/toko_hoshi.gif");
                    break;
                case "hoshi_4":
                    $("#hoshi_5").attr("src","img/03_toukou/toko_hoshi.gif");
                    $(this).attr("src","img/03_toukou/toko_hoshi.gif");
                    break;
                case "hoshi_3":
                    $("#hoshi_5").attr("src","img/03_toukou/toko_hoshi.gif");
                    $("#hoshi_4").attr("src","img/03_toukou/toko_hoshi.gif");
                    $(this).attr("src","img/03_toukou/toko_hoshi.gif");
                    break;
                case "hoshi_2":
                    $("#hoshi_5").attr("src","img/03_toukou/toko_hoshi.gif");
                    $("#hoshi_4").attr("src","img/03_toukou/toko_hoshi.gif");
                    $("#hoshi_3").attr("src","img/03_toukou/toko_hoshi.gif");
                    $(this).attr("src","img/03_toukou/toko_hoshi.gif");
                    break;
                case "hoshi_1":
                    $("#hoshi_5").attr("src","img/03_toukou/toko_hoshi.gif");
                    $("#hoshi_4").attr("src","img/03_toukou/toko_hoshi.gif");
                    $("#hoshi_3").attr("src","img/03_toukou/toko_hoshi.gif");
                    $("#hoshi_2").attr("src","img/03_toukou/toko_hoshi.gif");
                    $(this).attr("src","img/03_toukou/toko_hoshi.gif");
                    break;
                default:
                    // console.log("default");
                    // $(this).attr("src","img/03_toukou/toko_hoshi.gif");
                    break;
            }
        }
    });
    $(":radio[name=select_public]").click(function(){
        var val = $("[name=select_public]:checked").val();
        if(val=="public"){
            $(".public label.rdobtn").css("background-image","url(img/03_toukou/toko_check_on.gif)");
            $(".no_public label.rdobtn").css("background-image","url(img/03_toukou/toko_check.gif)");
        }else{
            $(".no_public label.rdobtn").css("background-image","url(img/03_toukou/toko_check_on.gif)");
            $(".public label.rdobtn").css("background-image","url(img/03_toukou/toko_check.gif)");                    
        }

    });
    $(".chkbox").click(function(){
        var checked = $(this).attr("checked");
        if(checked=='checked'){
            $(this).attr("checked",false)
            .css("background-image","url(img/03_toukou/toko_check.gif)");
        }else{
            $(this).attr("checked",true)
            .css("background-image","url(img/03_toukou/toko_check_on.gif)");
        }
    });

    // 撮影後に処理を開始
    console.log("bbb");
    $("#item_photo").change(function(){
        console.log("4");
        var canvasObj = $("#mycanvas")[0];
        console.log(canvasObj);
        var context = canvasObj.getContext("2d");
        var canvasW = canvasObj.width;
        var canvasH = canvasObj.height;
        console.log(context);
        console.log(canvasH);
        console.log(canvasW);
        var reader = new FileReader();// "FileReader"オブジェクトを生成し変数readerに格納
        // ↓readerにファイルが読み込まれた後（ onload ）の動作を定義
        reader.onload = function(evt){
            // ロード時の各種情報はonloadの引数（この場合はevt）に格納される

            console.log("aaa")//←表示されない．readerにファイルが読み込まれない
            var imgObj = new Image();
            imgObj.src = reader.result;
            console.log(imgObj.src);
            imgObj.onload = function(){
                console.log("ccc");
                context.drawImage(imgObj,0,0,canvasObj.width,canvasObj.height);
            }
        }
        var file = this.files[0]; //任意の変数に選択されたファイルのオブジェクトを格納
        // console.log(file.lastModifiedDate); //ファイルの更新日時

        // ↓画像読み込みを実行。"FileReader"の"readAsDataURL"関数を使う
        // 引数はユーザーが入力したファイルのオブジェクト（＝ file ＝ this.files[0]）
        reader.readAsDataURL(file);
        console.log(reader);
    });
    

    $("#ng").click(function () {
        location.reload();
    });


});
