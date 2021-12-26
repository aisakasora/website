$(function() {
    $("#test").click(function() {
        $(".test").modal('show');
    });
    $(".test").modal({
        closable: true
    });
    $('.ui.sticky')
        .sticky({
            context: '#photo1'
        });

    $('.special.cards .image').dimmer({
        on: 'hover'
    });

    // var cardContainer = document.getElementsByClassName("ui special cards")[0]

    // var dataList = [{
    //         imageUrl: "",
    //         title: "晴朗秋日",
    //         film: "Kodrk Portra400",
    //         description: "琶洲塔附近的公园里，秋风与花朵共舞。",
    //         date: "2021年11月",
    //         photographer: "空空"
    //     },
    //     {
    //         imageUrl: "./img_min/120/negative/N1_min.jpg",
    //         title: "晴朗秋日",
    //         film: "Kodrk Portra400",
    //         description: "琶洲塔附近的公园里，秋风与花朵共舞。",
    //         date: "2021年11月",
    //         photographer: "空空"
    //     }
    // ]


    // for (index in dataList) {
    //     var data = dataList[index]
    //     var card = "\
    //     <div class=\"card\">\
    //         <div class=\"blurring dimmable image\">\
    //             <div class=\"ui dimmer\">\
    //                 <div class=\"content\">\
    //                     <div class=\"center\">\
    //                         <div class=\"ui inverted button\" onclick=\"window.location.href='./img_description.html'\">高清原图</div>\
    //                     </div>\
    //                 </div>\
    //             </div>\
    //             <img src=\"" + data.imageUrl + "\">\
    //         </div>\
    //         <div class=\"content\">\
    //             <div class=\"header\">" + data.title + "</div>\
    //             <div class=\"meta\">\
    //                 <a>" + data.film + "</a>\
    //             </div>\
    //             <div class=\"description\">" + data.description + "</div>\
    //         </div>\
    //         <div class=\"extra content\">\
    //             <span class=\"right floated\"> " + data.date + "</span>\
    //             <span><i class=\"user icon\"></i> Photo by " + data.photographer + " </span>\
    //         </div>\
    //     </div>\
    //     "
    //     cardContainer.innerHTML += card
    // }
});