$(function () {
    var XZ;//记录选中的数组

    var rani;
    function myrandom(len){	//随机函数
        rani = Math.floor(Math.random()*(len+2));//0~9
        if(rani != 0 && rani != len+1) return (rani-1);
        else rani = myrandom(len);
        return rani;
    }

    function  ran() {
        var i = myrandom($(".xz").length);
        return i;
    }

    $("#ab").hide();
    function aler(value){
        $("#ab").show();
        $("#ab h2").html(value);
    }
    $("#ab p a").click(function () {
        $("#ab").hide();
        $("#ab h2").html("");
    });
    $("#ab").click(function () {
        $("#ab").hide();
        $("#ab h2").html("");
    });

    let ran_index = 0;
    $(".btn").click(function () {
        if($(".xz").length <= 0){
            aler("没选号码抽你麻痹呢！");
        }
        else
        {
            ran_index = ran();
            aler($(".xz:eq("+ran_index+") span").html());
            if( $("h1").html() == "Randm") $("h1").html("");
            $("h1").html( $("h1").html() + " " +$(".xz:eq("+ran_index+") span").html());

        }

    })

})