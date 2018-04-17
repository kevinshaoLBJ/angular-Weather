var qing = "img/png/晴2.png";
var duoYun = "img/png/多云2.png";
var duoYunZhuanQing = "img/png/多云转晴2.png";
var duoYunZhuanYin = "img/png/多云转阴2.png";
var baoYu = "img/png/暴雨2.png";
var bingBao = "img/png/冰雹2.png";
var daXue = "img/png/大雪2.png";
var daYu = "img/png/大雨2.png";
var leiDian = "img/png/雷电2.png";
var leiZhenYu = "img/png/雷阵雨2.png";
var wu = "img/png/雾2.png";
var xiaoYu = "img/png/小雨2.png";
var xiaoXue = "img/png/小雪2.png";
var yin = "img/png/阴2.png";
var zhongYu = "img/png/中雨2.png";
var zhenYu = "img/png/阵雨.png";
//    1.和风天气:
function getWeatherDataByHe(city, success) {
    $.get("https://free-api.heweather.com/v5/weather",
        {
            city: city,
            key: '9851979f1fd84d7ba2ae1ae42970da98'
        }, function (re) {
            success(re)
        }
    )
}
function getHoursWeatherByHe(city, success) {
    $.get("https://free-api.heweather.com/v5/hourly",
        {
            city: city,
            key: '9851979f1fd84d7ba2ae1ae42970da98'
        }, function (re) {
            success(re)
        }
    )
}
//    2.now API:
function getWeatherDataByNow(city, success) {
    $.ajax({
        url: 'http://api.k780.com/',
        data: {
            app: 'weather.future',
            weaid: city,
            appkey: '27572',
            sign: 'e7e9704e216160c37100b31b6db69d16',
            format: 'json',
            jsoncallback: 'data',
        },
        type: 'get',
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'data',
        success: function (rs) {
            success(rs)
        }
    })
};
// 综合打包天气-------------
function weatherDataRequest(city, successful) {
    getWeatherDataByHe(city + "市", function (a) {
        getWeatherDataByNow(city, function (b) {
            getHoursWeatherByHe(city, function (c) {
                var weather = {
                    basic: a,
                    seven: b,
                    hours: c
                }
                successful(weather)
            })

        })
    })
}
//  显示下载icon---------------------
function showWeather(weath, path) {
    if (weath == "晴") {
        $(path).prop("src", qing);
    } else if (weath == "多云") {
        $(path).prop("src", duoYun);
    } else if (weath == "小雨") {
        $(path).prop("src", xiaoYu);
    } else if (weath == "多云转阴") {
        $(path).prop("src", duoYunZhuanYin);
    } else if (weath == "晴间多云"||weath == "晴转多云") {
        $(path).prop("src", duoYunZhuanQing);
    } else if (weath == "暴雨") {
        $(path).prop("src", baoYu);
    } else if (weath == "雾" || weath == "薄雾") {
        $(path).prop("src", wu);
    } else if (weath == "冰雹") {
        $(path).prop("src", bingBao);
    } else if (weath == "大雪") {
        $(path).prop("src", daXue);
    } else if (weath == "大雨") {
        $(path).prop("src", daYu);
    } else if (weath == "雷电") {
        $(path).prop("src", leiDian);
    } else if (weath == "雷阵雨") {
        $(path).prop("src", leiZhenYu);
    } else if (weath == "小雪") {
        $(path).prop("src", xiaoXue);
    } else if (weath == "阴") {
        $(path).prop("src", yin);
    } else if (weath == "阵雨") {
        $(path).prop("src", zhenYu);
    } else if (weath == "中雨"||weath == "中雨转小雨"||weath == "小雨转中雨") {
        $(path).prop("src", zhongYu);
    } else {
        $(path).prop("src", duoYun);
    }
}