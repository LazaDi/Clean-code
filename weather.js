"use strict"
let weather = {
    apiKey : "9f72e8b2b38c57bdea25ff8e9971f37f",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        + "&units=metric&appid=" + this.apiKey)
        .then((response)=>response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const{ name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const{ speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C"
        document.querySelector(".humidity").innerText = "Humididty : " + humidity + "%";
        document.querySelector(".windspeed").innerText = "Wind speed : " + speed + "km/h";

        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function () {
        this.fetchWeather(document.querySelector(".searchbar").value);
    }
};



document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});
document.querySelector(".searchbar").addEventListener("keyup", function(){
    if(event.key==="Enter"){
        weather.search();
    }
});
