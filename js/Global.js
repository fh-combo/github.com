window.onload=function(){
    Preloader(MarketList,domList);
    Preloader(MarketDesignList,domList1);
};

var domList,domList1;
domList=$("#change-banner>li img");
domList1=$("#design-banner>li img");
var MarketList,MallList,ShopList,MarketDesignList,ShopDesignList,MallDesignList;
MarketList=['imgs/57.jpg','imgs/57.jpg','imgs/2008122510134038_2.jpg','imgs/5290458_114840036316_2.jpg'];
MallList=['imgs/18071023_164300608000_2.jpg','imgs/18071023_164300608000_2.jpg','imgs/2008122510134038_2.jpg','imgs/5290458_114840036316_2.jpg'];
ShopList=['imgs/5290458_114840036316_2.jpg','imgs/5290458_114840036316_2.jpg','imgs/2008122510134038_2.jpg','imgs/5290458_114840036316_2.jpg'];
MarketDesignList=['imgs/2008111384358912_2.jpg','imgs/57.jpg','imgs/2008122510134038_2.jpg','imgs/5290458_114840036316_2.jpg'];
ShopDesignList=['imgs/banner-nth-5.png','imgs/57.jpg','imgs/57.jpg','imgs/5290458_114840036316_2.jpg'];
MallDesignList=['imgs/banner-nth-1.png','imgs/banner-nth-1.png','imgs/2008122510134038_2.jpg','imgs/5290458_114840036316_2.jpg'];

function Preloader(srcList,$domlist){
    $domlist.each(function (idx, ele) {
        if(srcList[idx]){
            ele.setAttribute('src', srcList[idx]);
        }
    });
}
/*缩略图介绍*/
$(function(){
    var oninto = $(".dsg-pro > ul > li");
    oninto.each(function(i){
    oninto.eq(i).hover(
        function(){
            $(this).find("p").animate(
                {bottom:'2px'},"fast"
            ).end();
        },
   function(){
        $(this).find("p").animate(
            {bottom:'-36px'},"fast"
        ).end();
    }
    );
    });
});
/*
end*/
/*设计成员轮播图控制器*/
$(function(){
     var dsg = $(".wrapBox ul > li");
    dsg.each(function(i){
        dsg.eq(i).hover(
            function(){
                $(this).find("p").animate(
                    {bottom:'0'},"fast").end();
            },
            function(){
                $(this).find("p").animate(
                    {bottom:"-60px"},"fast"
                ).end();
            }
        )
    });
});
/*end*/

/*
导航栏样式切换*/
/*
$(function(){
    var alink=$("nav .nav-line .home-bread .nav-info li");
       alink.click(function(e){
        var src = e.target;
           var href = $(src).attr("href");
           if(!href){
               return;
           }
           $(".nav-act").removeClass("nav-act");
           $(src).addClass("nav-act");

       });
});
*/

//$(function(){
//
//});
/*end*/
