
$(document).ready(function(){
  var api = "https://fcc-weather-api.glitch.me/api/current?";
  var lon, lat;
  var tempUnit = 'C';
  var cTemp;
  var fTemp;
  var tempSwap = false;
  //geo-location getter
  $.getJSON("https://freegeoip.net/json/", function(data2) {
    lat = "lat="+data2.latitude;
    lon = "lon="+data2.longitude;
    console.log(lat);
    console.log(lon);
    getWeather(lat, lon);
    console.log(api + lat + "&" + lon);

////////////////////////////2

  function getWeather(lat, lon) {
  var urlString = api + lat + "&" + lon;
    console.log(urlString);
  $.ajax({
    url: urlString, success: function (result) {
      $("#city").text(result.name + ", ");
      console.log(result.name);
      $("#country").text(result.sys.country);
      cTemp = Math.round(result.main.temp * 10) / 10;
      fTemp = Math.round(cTemp * 9 / 5 + 32)
      $("#temp").text(cTemp + String.fromCharCode(176)+ " ");
      $("#tempUnit").text(tempUnit);
      $("icon-desc").html(result.weather[0].description+"<img src='"+result.weather[0].icon + "'>");
      console.log(result.weather[0].description +"<img src='"+result.weather[0].icon + "'>")
      $("#desc").text(result.weather[0].description);
      $("#icon").html("<img src='"+ result.weather[0].icon + "'>" );
      $("#pressure").text(result.main.pressure)
      $("#high-low").html("Low: "+ result.main.temp_min + String.fromCharCode(176) + tempUnit +"  /  High: " + result.main.temp_max + String.fromCharCode(176) + tempUnit);
      $("#humidity").text("Humidity: " + result.main.humidity + "%")
      console.log()


    }
  });
    //change from C to F to F
    $("#tempButton").on("click", function() {
    var currentTempUnit = $("#tempUnit").text();
    var newTempUnit = currentTempUnit == "C" ? "F" : "C";
    $("#tempUnit").text(newTempUnit);
      console.log(currentTempUnit + " " + newTempUnit)
    if (tempSwap===false) {
      //var fahTemp = Math.round(parseInt($("#temp").temp()) * 9 / 5 + 32);
      //$("#temp").text(fahTemp + " " + String.fromCharCode(176));
      $("#temp").text(fTemp + String.fromCharCode(176)+ " ");
      tempSwap = true;
      console.log("if");
    } else {
      //$("temp").text(cTemp + " " + String.fromCharCode(176));
      $("#temp").text(cTemp + String.fromCharCode(176)+ " ");
      tempSwap = false;
      console.log("else");
    }

  });
  };
  });
});



  
  /*function getWeather(lat, lon) {
    var urlString = "https://fcc-weather-api.glitch.me/api/current?" + lat + "&"+ lon;
    $.ajax({
      url: urlString, success: function(result) {
        cTemp = Math.round(result.main.temp * 10) / 10;
        $("temp").text(result.main.temp);
        $("#location").text(result.name);
        $("#desc").text(result.desc);
        $("#icon").html("<img src='"+result.weather[0].icon+"'");
        $("#pressure").text(newPressure);
        $("#high-low").text(newHighLow);
        $("#sea-level").text(newSeaLevel);
        $("#wind-speed").text(newWindSpeed);

      }
    })
  }*/
  //$("temp").text(https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139)
  /*function IconGen(desc) {
  var desc = desc.toLowerCase()
  switch (desc) {
    case 'drizzle':
      addIcon(desc)
      break;
    case 'clouds':
      addIcon(desc)
      break;
    case 'rain':
      addIcon(desc)
      break;
    case 'snow':
      addIcon(desc)
      break;
    case 'clear':
      addIcon(desc)
      break;
    case 'thunderstom':
      addIcon(desc)
      break;
    default:
      $('div.clouds').removeClass('hide');
  }
}

function addIcon(desc) {
  $('div.' + desc).removeClass('hide');
}

  */
