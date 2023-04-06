

//days & monthes
monthName = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Spet', 'Oct', 'Nov', 'Dec'],
days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];


// today
let country = document.getElementById("country")
currentDay = document.getElementById("today")
currentDate = document.getElementById("date")
currentDegree = document.getElementById("degree")
iconOfWeatherToday = document.getElementById("iconImage")
currentClouds = document.getElementById("clouds")
direction = document.getElementById("direction")


// tomorrow
let tomorrowDay = document.getElementById("tomorrow")
tomorrowMaxDegree = document.getElementById("tomorrowMaxDegree")
tomorrowMinDegree = document.getElementById("tomorrowMinDegree")
iconOfWeatherTomorrow = document.getElementById("iconImageTomorrow")
tomorrowClouds = document.getElementById("tomorrowClouds")


// after tomorrow
let afterTomorrowDay = document.getElementById("afterTomorrow")
let afterTomorrowMaxDegree = document.getElementById("afterTomorrowMaxDegree")
let afterTomorrowMinDegree = document.getElementById("afterTomorrowMinDegree")
let iconOfWeatherAfterTomorrow = document.getElementById("iconImageAfterTomorrow")
let afterTomorrowClouds = document.getElementById("afterTomorrowClouds")

let currentLocation = `egypt`
let search = document.getElementById("search")

async function getWeatherData() {
    let api = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d68958791ab14756840212300232202&q=${currentLocation}&days=3&lang=en`)
    respons = await api.json()

    // today
    country.innerHTML = respons.location.name
    currentDegree.innerHTML = respons.current.temp_c + " °C"
    currentClouds.innerHTML = respons.current.condition.text
    iconOfWeatherToday.setAttribute("src", respons.current.condition.icon)
    direction.innerHTML = respons.current.wind_dir


    // tomorrow
    tomorrowMaxDegree.innerHTML = respons.forecast.forecastday[1].day.maxtemp_c + " °C"
    tomorrowMinDegree.innerHTML = respons.forecast.forecastday[1].day.mintemp_c + " °C"
    tomorrowClouds.innerHTML = respons.forecast.forecastday[1].day.condition.text
    iconOfWeatherTomorrow.setAttribute("src", respons.forecast.forecastday[1].day.condition.icon)


    // after tomorrow
    afterTomorrowMaxDegree.innerHTML = respons.forecast.forecastday[2].day.maxtemp_c + " °C"
    afterTomorrowMinDegree.innerHTML = respons.forecast.forecastday[2].day.mintemp_c + " °C"
    afterTomorrowClouds.innerHTML = respons.forecast.forecastday[2].day.condition.text
    iconOfWeatherAfterTomorrow.setAttribute("src", respons.forecast.forecastday[2].day.condition.icon)

    
    getTime()
}
getWeatherData()

search.addEventListener("keyup",function(){
    currentLocation = search.value;
    getWeatherData(currentLocation)
})

function getTime() {
    let day = new Date()

    currentDay.innerHTML = days[day.getDay()]
    currentDate.innerHTML = day.getDate() +" "+ monthName[day.getMonth()]
    tomorrowDay.innerHTML = days[new Date(respons.forecast.forecastday[1].date).getDay()]
    afterTomorrowDay.innerHTML = days[new Date(respons.forecast.forecastday[2].date).getDay()]
}

