let url = "https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=f8a7c3792c91300c&lat=34.50513577056088&lng=135.43435250168423&range=3&format=jsonp";

$.ajax({
    url: url,
    type: 'GET',
    dataType: 'jsonp',
    jsonpCallback: 'callback'
}).done(function(data) {
    console.log(data);
    const obj = JSON.parse(data)
    var data_name = obj["results"]["shop"][0]["name"];
    var data_address = data_json[0]["address"];
    //出力
    $("#name").text(data_name);
    $("#address").text(data_address);

}).fail(function(data) {
    console.log(data);
});