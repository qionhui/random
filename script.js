$(function () {
    let dnimg = [
        "imgs/dn5.jpg",
        "imgs/dn5.jpg"
    ];
    let sjimg = [
//            "imgs/222213.jpg"
//         "imgs/sj1.jpg",
//         "imgs/sj2.jpg",
        "imgs/sj3.png"
//         "imgs/sj4.png",
//         "imgs/sj5.png",
//         "imgs/sj6.png",
//         "imgs/sj7.jpg",
//         "imgs/sj8.jpg",
//         "imgs/sj9.jpg",
    ];
    let img_index = 0;
    if($("body").width() < 980){
        img_index = Math.floor(Math.random()*sjimg.length);
        let img = new Image();
        img.src = sjimg[img_index];
            $(".load-maxBox").height(0);
            $("#min").css({
                "background-image": "url(\""+sjimg[img_index]+"\")"
            })
    }
    else if($("body").width() > 980){
        img_index = Math.floor(Math.random()*dnimg.length);
        let img = new Image();
        img.src = dnimg[img_index];
            $(".load-maxBox").height(0);
            $("#min").css({
                "background-image": "url(\""+dnimg[img_index]+"\")"
            })
    }

    //---特效
    $(function(){
        $(".bor>a").click(function(){
            $(this).parent().toggleClass("wxz");
            $(this).parent().toggleClass("xz");
            $("h1").html("Randm");
        })
    })

})
