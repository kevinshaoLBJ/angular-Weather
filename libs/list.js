
       var data = [{
           cityName: "北京",
           count: 0
       }, {
           cityName: "上海",
           count: 0
       }, {
           cityName: "武汉",
           count: 0
       }, {
           cityName: "广州",
           count: 0
       }, {
           cityName: "杭州",
           count: 0
       }, {
           cityName: "西安",
           count: 0
       }, {
           cityName: "成都",
           count: 0
       }]
       //获取本地存储的值
       function getCitylist() {
           var list = localStorage.getItem('citya');
           if (!list) {
               saveCitylist(data)
           } else {
               var vv=JSON.parse(localStorage.getItem('citya'));
           }
           return vv;
       }
// console.log(getCitylist())
       function saveCitylist(data) {
           localStorage.setItem("citya",JSON.stringify(data))
       }
       //判断点击获取的值与本地存储进行比较是否存在
       function addCityCount(cityName) {
           var cityData = getCitylist();
           var isHave = cityData.some(function (value, i) {
               if (value.cityName === cityName) {
                   cityData[i].count++;
                   return true;
               } else {
                   return false;
               }
           })
           if (isHave === false) {
               cityData.push({
                   cityName: cityName,
                   count: 1
               })
           }
           saveCitylist(cityData);
       }
       function addCityList() {
           var arr = getCitylist().sort(function (a, b) {
               return b.count - a.count;
           });
           arr.length = 7;
           saveCitylist(arr);
           return arr;
       }