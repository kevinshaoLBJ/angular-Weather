angular.module('my.filters', [])
.filter("week", function () {
    return function (x, index) {
        if (index === 0) {
            x = '今日'
        } else if (index === 1) {
            x = '明日'
        }
        return x
    }
})
.filter("imgSelect",function ( ) {
    return function (x) {
        if (x == "晴") {
            x="img/png/晴2.png"
        } else if (x == "多云") {
            x="img/png/多云2.png"
        } else if (x == "小雨") {
            x="img/png/小雨2.png";
        } else if (x == "多云转阴") {
            x="img/png/多云转阴2.png";
        } else if (x == "晴间多云"||x == "晴转多云") {
            x="img/png/多云转晴2.png";
        } else if (x == "暴雨") {
            x="img/png/暴雨2.png";
        } else if (x == "雾" || x == "薄雾") {
            x="img/png/雾2.png";
        } else if (x == "冰雹") {
            x="img/png/冰雹2.png";
        } else if (x == "大雪") {
            x="img/png/大雪2.png";
        } else if (x == "大雨") {
            x="img/png/大雨2.png";
        } else if (x == "雷电") {
            x="img/png/雷电2.png";
        } else if (x == "雷阵雨") {
            x="img/png/雷阵雨2.png";
        } else if (x == "小雪") {
            x="img/png/小雪2.png";
        } else if (x == "阴") {
            x="img/png/阴2.png";
        } else if (x == "阵雨") {
            x="img/png/阵雨.png";
        } else if (x == "中雨"||x == "中雨转小雨"||x == "小雨转中雨") {
            x="img/png/中雨2.png";
        } else {
            x="img/png/多云2.png";
        }
        return x
    }
})