angular.module('my.controllers', [])
    .controller('test', function ($scope,$state,weather,weatherNow) {
        $scope.weatherInformation = {};
        $scope.city2 = localStorage.getItem("city2");
        if ($scope.city2 == null) {
            $scope.city2 = "北京"
            $scope.xxx = "北京天气";
        } else {
            $scope.xxx = $scope.city2 + "天气"
        }
        weather.getWeatherDataByHe($scope.city2).then(function (re) {
            $scope.weatherInformation.nowWeather = re.data.HeWeather5[0].daily_forecast[0].cond.txt_d;
            $scope.weatherInformation.nowTmplimit = re.data.HeWeather5[0].daily_forecast[0].tmp.min + "℃～" + re.data.HeWeather5[0].daily_forecast[0].tmp.max + "℃";
            $scope.weatherInformation.nowTmp = "当前气温：" + re.data.HeWeather5[0].now.tmp + "℃";
            $scope.weatherInformation.wind = re.data.HeWeather5[0].now.wind.dir + re.data.HeWeather5[0].now.wind.sc;
            $scope.weatherInformation.air = "空气质量指数:" + re.data.HeWeather5[0].aqi.city.aqi + re.data.HeWeather5[0].aqi.city.qlty;
            $scope.hoursData = re.data.HeWeather5[0].hourly_forecast.slice(0, 4);
            $scope.air11 = "空气指数(" + re.data.HeWeather5[0].suggestion.air.brf + "):" + re.data.HeWeather5[0].suggestion.air.txt
            $scope.cleanCar = "洗车指数(" + re.data.HeWeather5[0].suggestion.cw.brf + "):" + re.data.HeWeather5[0].suggestion.cw.txt
            $scope.sports = "运动指数(" + re.data.HeWeather5[0].suggestion.sport.brf + "):" + re.data.HeWeather5[0].suggestion.sport.txt
            $scope.drsg = "穿衣指数(" + re.data.HeWeather5[0].suggestion.drsg.brf + "):" + re.data.HeWeather5[0].suggestion.drsg.txt
            $scope.flu = "感冒指数(" + re.data.HeWeather5[0].suggestion.flu.brf + "):" + re.data.HeWeather5[0].suggestion.flu.txt
            $scope.trav = "旅游指数(" + re.data.HeWeather5[0].suggestion.trav.brf + "):" + re.data.HeWeather5[0].suggestion.trav.txt
        }, function (e) {
            console.log(e)
        })
        weatherNow.getWeatherDataByNow($scope.city2).then(function (rs) {
            $scope.seven = rs.data.result;
        },function (e) {
            console.log(e)
        })
        $scope.exchangeCity = function (){
            $state.go("position");
        }
    })
    .controller('position', function ($scope,$state) {
        $scope.back = function () {
            $state.go("HomeWeather");
        }
        $scope.cityList = cityList.citylist;
        console.log(cityList.citylist);
        getCitylist();
        $scope.get = JSON.parse(localStorage.getItem("citya"));
        addCityList($scope.get);
        $scope.citys = function (x) {
            $scope.county = $scope.cityList[x].c;
            if (x == 0 || x == 1 || x == 8 || x == 21 || x == 31 || x == 32) {
                addCityCount($scope.cityList[x].p);
                saveCitylist(addCityList());
                localStorage.setItem("city2",$scope.cityList[x].p);
                $state.go("HomeWeather",{data:'传参过来了'});
            } else {
                localStorage.setItem("city",JSON.stringify($scope.county));
                $state.go("city");
            }
        };
        $scope.autoCity = function () {
            console.log(111)
            $scope.citysearch = new AMap.CitySearch();
            $scope.citysearch.getLocalCity(function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    if (result && result.city && result.bounds) {
                        $scope.cityinfo = result.city;
                        console.log($scope.cityinfo)
                        localStorage.setItem("city2", $scope.cityinfo.replace('市', ''));
                        $state.go("HomeWeather");
                    }
                } else {
                    alert("请求超时");
                }
            })
        };
        $scope.placeBut = function (x) {
            addCityCount($scope.get[x].cityName);
            localStorage.setItem("city2", $scope.get[x].cityName);
            $state.go("HomeWeather");
        }
    })
    .controller('city',function ($scope,$state) {
        $scope.back = function () {
            $state.go("position");
        }
        $scope.city = JSON.parse(localStorage.getItem("city"));
        $scope.citys=function (y) {
            addCityCount($scope.city[y].n);
            saveCitylist(addCityList());
            localStorage.setItem("city2",$scope.city[y].n);
            $state.go("HomeWeather");
        }
    })
