app.directive("tabDirective",function(){
    return {
        templateUrl:"App/view/temp/_tab.html",
        link:function(scope,ele,attr){
            var obj=[
                {
                    "name":"上汽大众-全新路途L",
                    "content":"上汽大众-全新旅途L享2年0利率",
                    "img":"pics1.gif",
                    "price":"1元"
                },
                {
                    "name":"上汽大众-全新路途L",
                    "content":"上汽大众-全新旅途L享2年0利率",
                    "img":"pics2.gif",
                    "price":"1元"
                },
                {
                    "name":"上汽大众-全新路途L",
                    "content":"上汽大众-全新旅途L享2年0利率",
                    "img":"pics3.gif",
                    "price":"1元"
                },
                {
                    "name":"上汽大众-全新路途L",
                    "content":"上汽大众-全新旅途L享2年0利率",
                    "img":"pics4.gif",
                    "price":"1元"
                }
            ];

            $(".btnRelode").on("click",function(){
                var str="";
                for(var i=0;i<obj.length;i++){
                    str+='<li>'+
                        '<p><img ng-src="Content/img/pics4.gif" alt=""></p>'+
                        '<p class="nameCar">'+obj[i].name+'</p>'+
                        '<p class="contentCar">'+obj[i].content+'</p>'+
                        '<p class="priceCar">'+obj[i].price+'</p>'+
                    '</li>';
                }
                $(".loveCar")[0].innerHTML+=str;
            })
        }
    }
});