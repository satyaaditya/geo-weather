$(document).ready(function(){
     $("#submit_city").click(function(e){
        return show_current_forecast();
     });
});

function show_current_forecast(){

    var inpt = $("#city_input").val();
    if(inpt != ''){
        $.ajax({
               type: "GET",
               url: 'http://api.openweathermap.org/data/2.5/weather?q=' + inpt + "&units=metric" + "&APPID=64db332744b1bef2abd19c381ba6469d",
                datatype: "jsonp",
                success: function(data){
                    var html_element = show_current_data(data);
                    $("#showWeather").html(html_element);
                    $("#city_input").val('');
                }

            })
    }
    else{
         $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>");
    }
}

function show_current_data(data){

    return   '<div class="jumbotron jumbotron-fluid" style="background-color: #EEE8AA"> '+
  '<div class="container">'+
    '<h3 class="display-4">current forecast '+
        'for '+ data.name +', '+ data.sys.country + '</h3>' +
            "<h3 style='padding-left:40px;'><strong>Weather</strong>: "+data.weather[0].main+"</h3>"+
            "<h3 style='padding-left:40px;'><strong>Description</strong>:<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'> "+data.weather[0].description+"</h3>"+
            "<h3 style='padding-left:40px;'><strong>Temperature</strong>: "+data.main.temp+" &deg;C</h3>"+
            "<h3 style='padding-left:40px;'><strong>Pressure</strong>: "+data.main.pressure+" hpa</h3>"+
            "<h3 style='padding-left:40px;'><strong>Humidity</strong>: "+data.main.humidity+"%</h3>"+
            "<h3 style='padding-left:40px;'><strong>Min Temperature</strong>: "+data.main.temp_min+"&deg;C</h3>"+
            "<h3 style='padding-left:40px;'><strong>Max Temperature</strong>: "+data.main.temp_max+"&deg;C</h3>"+
            "<h3 style='padding-left:40px;'><strong>Wind Speed</strong>: "+data.wind.speed+"m/s</h3>"+
            "<h3 style='padding-left:40px; padding-bottom:30px;'><strong>Wind Direction</strong>: "+data.wind.deg+"&deg;</h3>";+

  '</div>'+
'</div>'
}