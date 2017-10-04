var points = [
    document.getElementById('from'),
    document.getElementById('to')
];

points.map(function (point) {
    point.addEventListener("keydown", function () {
        calcRoute();
    })
});

var map;
var directionsDisplay;
var directionsService;
var markerArray = [];

function initialize() {
    directionsService = new google.maps.DirectionsService();
    var defaultCenter = new google.maps.LatLng(50.4499623, 30.5233854);
    var mapOptions = {
        zoom: 8,
        center: defaultCenter
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var rendererOptions = {map: map};
    directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
}

function calcRoute() {
    for (var i = 0; i < markerArray.length; i++) {
        markerArray[i].setMap(null);
    }
    var start = document.getElementById('from').value;
    var end = document.getElementById('to').value;
    var request = {
        origin: start,
        destination: end,
        travelMode: 'DRIVING'
    };
    directionsService.route(request, function(response, status) {
        if (status === "OK") {
            directionsDisplay.setDirections(response);
            var lat = response.routes[0].legs[0].end_location.lat(),
                lng = response.routes[0].legs[0].end_location.lng(),
                endAddress = response.routes[0].legs[0].end_address;
            console.log(endAddress);
            document.getElementById('forecast-city').innerText = endAddress;
            var ajax = new XMLHttpRequest();
            ajax.open(
                "GET",
                "http://api.openweathermap.org/data/2.5/forecast?lat="+ lat +"&lon="+ lng +"&appid=5772e672228428aef3fc410e6d3e908d"
            );
            ajax.send();
            ajax.onload = function (){
                var forecasts = JSON.parse(ajax.response);
                viewForecasts(forecasts);
            };
        }
    });
}

function unique(arr) {
    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        obj[str] = true;
    }

    return Object.keys(obj);
}

function viewForecasts(forecasts) {
    var list = forecasts.list, dates = [];
    for (var index in list) {
        dates.push(list[index].dt_txt.match(/2017-[0-1][0-9]-[0-3][0-9]/));
    }
    dates = unique(dates);
    console.log("Dates: \n" + dates);
    var finalForecasts = {};
    console.log('Date and time');
    for (var dateId in dates) {
        var tempDate = [];
        for (var dateTimeId in list) {
            if (list[dateTimeId].dt_txt.indexOf(dates[dateId]) === 0) {
                tempDate.push(list[dateTimeId]);
            }
        }
        finalForecasts[dates[dateId]] = tempDate;
    }
    var firstDate = finalForecasts[list[0].dt_txt.match(/2017-[0-1][0-9]-[0-3][0-9]/)],
        today = document.getElementById('forecast-result-today'),
        fiveDays = document.getElementById('forecast-result-five-days'),
        listHtml = '';
    for (var index in firstDate) {
        listHtml += '<li class="forecast-result-item">' +
            '<div class="time">'+ firstDate[index].dt_txt.match(/[0-2][0-9]:[0-2][0-9]:[0-2][0-9]/) +'</div>' +
            '<div class="temperature">' + parseInt(firstDate[index].main.temp_min - 273) + " - " + parseInt(firstDate[index].main.temp_max - 273) + '</div>' +
            '<div class="weather">' + firstDate[index].weather[0].description + '</div>' +
            '</li>';
    }
    today.innerHTML = listHtml;

    listHtml = '';
    for (var date in finalForecasts) {
        for (var index in finalForecasts[date]) {
            list += '<li class="forecast-result-item">' +
                '<div class="time">'+ finalForecasts[date][index].dt_txt.match(/[0-2][0-9]:[0-2][0-9]:[0-2][0-9]/)[0] +'</div>' +
                '<div class="temperature">' + parseInt(finalForecasts[date][index].main.temp_min - 273) + " - " + parseInt(finalForecasts[date][index].main.temp_max - 273) + '</div>' +
                '<div class="weather">' + finalForecasts[date][index].weather[0].description + '</div>' +
                '</li>';
        }
    }
    fiveDays.innerHTML = listHtml;

}

var today = document.getElementById('forecast-today'),
    fiveDays = document.getElementById('forecast-five-days');

today.onclick = function () {
    if (!this.classList.contains('active') || document.getElementById('forecast-five-days').classList.contains('active')) {
        this.classList.add('active');
        document.getElementById('forecast-result-five-days').classList.add('item-non-active');
        document.getElementById('forecast-result-five-days').classList.remove('item-active');
        document.getElementById('forecast-result-today').classList.add('item-active');
        document.getElementById('forecast-result-today').classList.remove('item-non-active');
        document.getElementById('forecast-five-days').classList.remove('active')
    }
};

fiveDays.onclick = function () {
    if (!this.classList.contains('active') || document.getElementById('forecast-today').classList.contains('active')) {
        this.classList.add('active');
        document.getElementById('forecast-result-five-days').classList.add('item-active');
        document.getElementById('forecast-result-five-days').classList.remove('item-non-active');
        document.getElementById('forecast-result-today').classList.add('item-non-active');
        document.getElementById('forecast-result-today').classList.remove('item-active');
        document.getElementById('forecast-today').classList.remove('active');
    }
};