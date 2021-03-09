var apiKey = "062da9840f4d6d4b0fcb124a1b98d902";


    var uvCall = "https://api.openweathermap.org/data/2.5/uvi?&appid=e79e860f1526eb9cc2572046fff7a30c&lat=";
    fetch(uvCall)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

        
        })





function getCurrent() {
    
}





