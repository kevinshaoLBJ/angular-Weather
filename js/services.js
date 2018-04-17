angular.module('my.services',[])
.factory("weather",function ($http,$q) {
    return {
        getWeatherDataByHe:function (city) {
            var deferred=$q.defer()
            $http({
                method:'get',
                url:'https://free-api.heweather.com/v5/weather?city='+city+'市'+'&key=9851979f1fd84d7ba2ae1ae42970da98',
                responseType:'json'
            }).then(function (rs) {
                console.log(rs)
                deferred.resolve(rs)
            },function (e) {
                deferred.reject(e)
            })
            return deferred.promise
        }
    }
})
.factory("weatherNow",function ($http,$q,$sce) {
    return {
        getWeatherDataByNow:function (city) {
            var url = $sce.trustAsResourceUrl('http://api.k780.com/?app=weather.future&weaid='+city+'&appkey=27572&sign=e7e9704e216160c37100b31b6db69d16&format=json');
            var deferred=$q.defer()
            $http.jsonp(url,
                {jsonpCallbackParam:'jsoncallback'})
                .then(function (rs) {
                    console.log(rs)
                    deferred.resolve(rs)
                }, function (e){
                    console.log(e)
                    deferred.reject(e)
                });
            return deferred.promise
        }
    }
})