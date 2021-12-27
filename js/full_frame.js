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
            imageUrl: "./img_min/135/negative/N1_min.jpg",
            title: "童趣",
            film: "Fujifilm C200",
            description: "疫情首次好转后的海心沙亚运公园，春风带来了鸟语花香、带来了欢声笑语。",
            date: "2020年5月",
            photographer: "空空"
        },
        {
            imageUrl: "./img_min/135/negative/N3_min.jpg",
            title: "红",
            film: "Fujifilm C200",
            description: "和谐的红色。",
            date: "2020年5月",
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
});