$(document).ready(function(){
    $("#submit_city").click(function(){
           return show_forecast();
    });
});

function show_forecast(){

    var city_inpt = $("#for_city_input").val();
    var days_inpt = $("#days_input").val();
    if(city_inpt!='' && days_inpt!='' ){
         $.ajax({
               type: "GET",
                url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city_inpt + "&units=metric" + "&cnt=" + days_inpt + "&APPID=64db332744b1bef2abd19c381ba6469d",
                datatype: "jsonp",
                success: function(data){
                    var html_element = show_current_data(data);
                     var header = '<h2 style="font-weight:bold; font-size:30px; margin-top:20px;">Weather forecast for ' + data.city.name + ', ' + data.city.country + '</h2>'
                    $("#header").html(header);
                    $("#forecastWeather").html(html_element);
                    $("#for_city_input").val('');
                    $("#days_input").val('');
                }

            })
    }
     else{
         $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>");
    }
}

function show_current_data(data){
    var table = '';


                for(var i = 0; i < data.list.length; i++){
                    table += "<tr>";

                    table += "<td><img src='http://openweathermap.org/img/w/"+data.list[i].weather[0].icon+".png'></td>";
                    table += "<td>" + data.list[i].weather[0].main + "</td>";
                    table += "<td>" + data.list[i].weather[0].description + "</td>";
                    table += "<td>" + data.list[i].temp.morn + "&deg;C</td>";
                    table += "<td>" + data.list[i].temp.night + "&deg;C</td>";
                    table += "<td>" + data.list[i].temp.min + "&deg;C</td>";
                    table += "<td>" + data.list[i].temp.max + "&deg;C</td>";
                    table += "<td>" + data.list[i].pressure + "hpa</td>";
                    table += "<td>" + data.list[i].humidity + "%</td>";
                    table += "<td>" + data.list[i].speed + "m/s</td>";
                    table += "<td>" + data.list[i].deg + "&deg;</td>";


                    table += "</tr>";
                }

                $("#forecastWeather").html(table);
                $("#header").html(header);

                $("#city").val('');
                $("#days").val('')
        return table;

     }


