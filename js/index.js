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



    var cardContainer = document.getElementsByClassName("ui special cards")[0]

    var dataList = [{
            imageUrl: "./img_min/120/negative/N1_min.jpg",
            title: "晴朗秋日",
            film: "Kodrk Portra400",
            description: "琶洲塔附近的公园里，秋风与花朵共舞。",
            date: "2021年11月",
            photographer: "空空"
        },
        {
            imageUrl: "./img_min/120/negative/N2_min.jpg",
            title: "日暮校园",
            film: "Kodrk Portra400",
            description: "教学楼旁，学生们不约而同的举起了手机，向着日落处。",
            date: "2021年11月",
            photographer: "空空"
        },
        {
            imageUrl: "./img_min/120/negative/N3_min.jpg",
            title: "拍摄自己的相机",
            film: "Kodrk Portra400",
            description: "朋友A背着我的相机，而我用朋友B的相机拍下了这一幕。。",
            date: "2021年10月",
            photographer: "空空"
        },
        {
            imageUrl: "./img_min/120/negative/N4_min.jpg",
            title: "向阳而生",
            film: "Kodrk Portra160",
            description: "宿舍门前的树上，默默无闻、茁壮成长的枝芽。",
            date: "2021年10月",
            photographer: "空空"
        },
    ]

    for (index in dataList) {
        var data = dataList[index]
        var card = "\
        <div class=\"card\">\
            <div class=\"blurring dimmable image\">\
                <div class=\"ui dimmer\">\
                    <div class=\"content\">\
                        <div class=\"center\">\
                            <div class=\"ui inverted button\" onclick=\"window.location.href='./img_description.html'\">高清原图</div>\
                        </div>\
                    </div>\
                </div>\
                <img src=\"" + data.imageUrl + "\">\
            </div>\
            <div class=\"content\">\
                <div class=\"header\">" + data.title + "</div>\
                <div class=\"meta\">\
                    <a>" + data.film + "</a>\
                </div>\
                <div class=\"description\">" + data.description + "</div>\
            </div>\
            <div class=\"extra content\">\
                <span class=\"right floated\"> " + data.date + "</span>\
                <span><i class=\"user icon\"></i> Photo by " + data.photographer + " </span>\
            </div>\
        </div>\
        "
        cardContainer.innerHTML += card
    }

    var cardContainer = document.getElementsByClassName("ui special cards")[1]

    var dataList = [{
            imageUrl: "./img_min/120/B&W/B1_min.jpg",
            title: "围栏之外",
            film: "Ilford HP5",
            description: "学校围栏外，小朋友掂起了双脚看向校内。",
            date: "2021年11月",
            photographer: "空空"
        },
        {
            imageUrl: "./img_min/120/B&W/B2_min.jpg",
            title: "温馨门前",
            film: "Ilford HP5",
            description: "面包店的温馨与装修工人忙碌的身影，在傍晚时分形成了强烈的对比。。",
            date: "2021年11月",
            photographer: "空空"
        }
    ]


    for (index in dataList) {
        var data = dataList[index]
        var card = "\
        <div class=\"card\">\
            <div class=\"blurring dimmable image\">\
                <div class=\"ui dimmer\">\
                    <div class=\"content\">\
                        <div class=\"center\">\
                            <div class=\"ui inverted button\" onclick=\"window.location.href='./img_description.html'\">高清原图</div>\
                        </div>\
                    </div>\
                </div>\
                <img src=\"" + data.imageUrl + "\">\
            </div>\
            <div class=\"content\">\
                <div class=\"header\">" + data.title + "</div>\
                <div class=\"meta\">\
                    <a>" + data.film + "</a>\
                </div>\
                <div class=\"description\">" + data.description + "</div>\
            </div>\
            <div class=\"extra content\">\
                <span class=\"right floated\"> " + data.date + "</span>\
                <span><i class=\"user icon\"></i> Photo by " + data.photographer + " </span>\
            </div>\
        </div>\
        "
        cardContainer.innerHTML += card
    }

    var cardContainer = document.getElementsByClassName("ui special cards")[2]

    var dataList = [{
            imageUrl: "./img_min/120/positive/P1_min.jpg",
            title: "流浪猫们",
            film: "FUJI POVIA 100F",
            description: "校舍后面那些小邻居们。",
            date: "2021年11月",
            photographer: "空空"
        },
        {
            imageUrl: "./img_min/120/positive/P2_min.jpg",
            title: "琶洲塔",
            film: "FUJI POVIA 100F",
            description: "琶洲塔前，游客匆匆。",
            date: "2021年11月",
            photographer: "空空"
        },
        {
            imageUrl: "./img_min/120/positive/P3_min.jpg",
            title: "晚霞下的图书馆",
            film: "FUJI POVIA 100F",
            description: "那天我抱着相机，在校内追逐着转瞬即逝的红霞，却看见日暮下灯火通明的图书馆。",
            date: "2021年11月",
            photographer: "空空"
        }
    ]


    for (index in dataList) {
        var data = dataList[index]
        var card = "\
        <div class=\"card\">\
            <div class=\"blurring dimmable image\">\
                <div class=\"ui dimmer\">\
                    <div class=\"content\">\
                        <div class=\"center\">\
                            <div class=\"ui inverted button\" onclick=\"window.location.href='./img_description.html'\">高清原图</div>\
                        </div>\
                    </div>\
                </div>\
                <img src=\"" + data.imageUrl + "\">\
            </div>\
            <div class=\"content\">\
                <div class=\"header\">" + data.title + "</div>\
                <div class=\"meta\">\
                    <a>" + data.film + "</a>\
                </div>\
                <div class=\"description\">" + data.description + "</div>\
            </div>\
            <div class=\"extra content\">\
                <span class=\"right floated\"> " + data.date + "</span>\
                <span><i class=\"user icon\"></i> Photo by " + data.photographer + " </span>\
            </div>\
        </div>\
        "
        cardContainer.innerHTML += card
    }

    $('.special.cards .image').dimmer({
        on: 'hover'
    });

})