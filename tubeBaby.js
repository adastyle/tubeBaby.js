$(()=>{
    $(document).ready(()=>{
        $('.xy_ol_content').mCustomScrollbar({
            theme:"dark"
        });
    })
     if($(".xy_right_contentShow").height()>300){
        $("ul.xy_ol_content").css("maxHeight",innerHeight);
    }
    else{
        $("ul.xy_ol_content").css("height",300);
    }

    var scrollTop;
        $(window).scroll(()=>{
            var footerOffset=$('.main2').offset().top;
            // var menuOffset=$("ul.xy_ol_content").offset().top;
            var menuOffset=$(".xy_tubeBaby_middle").offset().top;
            var menuHeight=$("ul.xy_ol_content").height();
            $search=$(".xy_ol_content");
            scrollTop=$(window).scrollTop();
            if($('.xy_tubeBaby_middle_box').offset().top<scrollTop){
                if((footerOffset-menuHeight)>=$(window).scrollTop()){
                    $search.addClass("fixeds").removeClass("noFixed");
                }else{
                    $search.addClass("noFixed").removeClass("fixeds");
                }
            }
            else{
                $search.removeClass("fixeds");
                $search.removeClass("noFixed");
            }

            //楼层滚动
            var floors=$(".floor");
            if(innerWidth>375){
                floors.each((i,elem)=>{
                    $f=$(elem);
                    if($f.offset().top-scrollTop<=innerHeight/7){
                        $(".ol_1").find("."+$f.attr("data-floorlight"))
                            .addClass("active")
                            .siblings("li").removeClass("active")
                        .parent().parent().siblings('ol,li')
                            .children("ol").children("li").removeClass('active');
                    }
                })
            }
        });

        

    //楼层点击事件  第一个li>ol
    $('.xy_ol_content').on("click","li>ol>li",function(){
        $tar=$(this);
        //$('ol>li').removeClass('active');
        $tar.addClass('active').siblings("ol,li").removeClass('active');
        $tar.parent().parent().siblings('ol,li').children("ol").children("li").removeClass('active');
        $('html,body').stop(true).animate({scrollTop:(($("."+$tar.attr("data-xyLi")).offset().top+5))},300);
    })
    var isShow=false;
    $('.xy_phone_show').click(e=>{
        if(innerWidth<768){
            $('.xy_ol_content').css({
                "zIndex":1000,
                "background":"white",
                "width":"100%",
                "minHeight":667,
                "position":"fixed"
            });
            //$("html,body").animate({scrollTop:0},300);
            if(!isShow){
                $(".nav-ctrl").css("zIndex",0);
                $('.xy_ol_content').show()
                // $(".fixed").css("width","100%");
            }
            else{
                $(".nav-ctrl").css("zIndex",1000);
                $('.xy_ol_content').hide();
                // $(".fixed").css("width",300);
                isShow=false;
            }
        }
    })
    
    $('.xy_ol_content').on('click','ol>li',e=>{
        if(innerWidth<768)
            $('.xy_ol_content').hide();
            isShow=false;
    })


    $(window).resize(function(){
        if(innerWidth<768){
            $('.xy_ol_content').css({
                "zIndex":1000,
                "background":"white",
                "width":"100%",
                "minHeight":667,
                "position":"fixed"
            });
            //$("html,body").animate({scrollTop:0},300);
            if(!isShow){
                $(".nav-ctrl").css("zIndex",0);
                $('.xy_ol_content').show()
                // $"(.fixed").css("width","100%");
            }
            else{
                $(".nav-ctrl").css("zIndex",1000);
                $('.xy_ol_content').hide();
                // $(".fixed").css("width",300);
                isShow=false;
            }
        }
        else{
            $('.xy_ol_content').css({
                "zIndex":0,
                "background":"none",
                "width":"0",
                "minHeight":0,
                "position":"static"
            });
        }
    })
})
