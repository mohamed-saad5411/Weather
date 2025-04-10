
let srchBtn = document.getElementById('srchBtn')
let locationBtn = document.getElementById('locationBtn')
let date = new Date()
let monthName = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Spet', 'Oct', 'Nov', 'Dec']
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentCity

srchBtn.addEventListener('keyup', async function (info) {
    currentCity = info.target.value
    getData(currentCity)

})

locationBtn.addEventListener('click' , function () {
    getData('cairo')
    srchBtn.value = ''
})

async function getData(currentCity = 'cairo') {

    let myHttp = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=996e089e29db4c81b6d42153250504&q=${currentCity}&days=7&lang=en`)
    let finalMyHttp = await myHttp.json()    

    dataCurrentDay(finalMyHttp)
    dataFristDay(finalMyHttp)
    dataSecondDay(finalMyHttp)
    dataThirdDay(finalMyHttp)
    dataForthDay(finalMyHttp)
    dayDetails(finalMyHttp)

}
getData()

function dataCurrentDay(finalMyHttp) {
    let currentDegree = document.getElementById('currentDegree')
    let currentLocation = document.getElementById('currentLocation')
    let currentImg = document.getElementById('currentImg')
    let currentDay = document.getElementById('currentDay')
    let textCondition = document.getElementById('textCondition')
    let sunriseTime = document.getElementById('sunriseTime')
    let sunsetTime = document.getElementById('sunsetTime')
    let feelsLike = document.getElementById('feelsLike')
    let visability = document.getElementById('visability')
    let pressure = document.getElementById('pressure')
    let currentDate = document.getElementById('currentDate')
    let currentMonth = document.getElementById('currentMonth')
    let humidity = document.getElementById('humidity')
    let percentageOfRain = document.getElementById('percentageOfRain')
    let percentageOfSnow = document.getElementById('percentageOfSnow')
    let i = date.getDay()

    currentLocation.innerHTML = finalMyHttp.location.name
    percentageOfRain.innerHTML = finalMyHttp.forecast.forecastday[0].day.daily_chance_of_rain + ' %'
    percentageOfSnow.innerHTML = finalMyHttp.forecast.forecastday[0].day.daily_chance_of_snow + ' %'
    currentDegree.innerHTML = finalMyHttp.current.temp_c
    textCondition.innerHTML = finalMyHttp.current.condition.text
    feelsLike.innerHTML = finalMyHttp.current.feelslike_c + ' °C'
    visability.innerHTML = finalMyHttp.current.vis_km + ' Km/hr'
    pressure.innerHTML = finalMyHttp.current.pressure_mb + ' hPa'
    humidity.innerHTML = finalMyHttp.current.humidity + ' %'
    currentImg.setAttribute('src', finalMyHttp.current.condition.icon)
    currentDay.innerHTML = days[new Date(finalMyHttp.forecast.forecastday[0].date).getDay()]
    currentDate.innerHTML = `, ${new Date(finalMyHttp.forecast.forecastday[0].date).getDate()}`
    currentMonth.innerHTML = monthName[new Date(finalMyHttp.forecast.forecastday[0].date).getMonth()]
    sunriseTime.innerHTML = finalMyHttp.forecast.forecastday[0].astro.sunrise
    sunsetTime.innerHTML = finalMyHttp.forecast.forecastday[0].astro.sunset


}

function dataFristDay(finalMyHttp) {
    let fristDayImg = document.getElementById('fristDayImg')
    let fristDayDegree = document.getElementById('fristDayDegree')
    let fristDayDate = document.getElementById('fristDayDate')
    let fristDay = document.getElementById('fristDay')

    fristDayImg.setAttribute('src', finalMyHttp.forecast.forecastday[1].day.condition.icon)
    fristDayDegree.innerHTML = finalMyHttp.forecast.forecastday[1].day.avgtemp_c
    fristDayDate.innerHTML = `${new Date(finalMyHttp.forecast.forecastday[1].date).getDate()}` + ` ${monthName[new Date(finalMyHttp.forecast.forecastday[1].date).getMonth()]}`
    fristDay.innerHTML = days[new Date(finalMyHttp.forecast.forecastday[1].date).getDay()]
}

function dataSecondDay(finalMyHttp) {
    let secondDayImg = document.getElementById('secondDayImg')
    let secondDayDegree = document.getElementById('secondDayDegree')
    let secondDayDate = document.getElementById('secondDayDate')
    let secondDay = document.getElementById('secondDay')

    secondDayImg.setAttribute('src', finalMyHttp.forecast.forecastday[2].day.condition.icon)
    secondDayDegree.innerHTML = finalMyHttp.forecast.forecastday[2].day.avgtemp_c
    secondDayDate.innerHTML = `${new Date(finalMyHttp.forecast.forecastday[2].date).getDate()}` + ` ${monthName[new Date(finalMyHttp.forecast.forecastday[2].date).getMonth()]}`
    secondDay.innerHTML = days[new Date(finalMyHttp.forecast.forecastday[2].date).getDay()]

}

function dataThirdDay(finalMyHttp) {
    let thirdDayImg = document.getElementById('thirdDayImg')
    let thirdDayDegree = document.getElementById('thirdDayDegree')
    let thirdDayDate = document.getElementById('thirdDayDate')
    let thirdDay = document.getElementById('thirdDay')

    thirdDayImg.setAttribute('src', finalMyHttp.forecast.forecastday[3].day.condition.icon)
    thirdDayDegree.innerHTML = finalMyHttp.forecast.forecastday[3].day.avgtemp_c
    thirdDayDate.innerHTML = `${new Date(finalMyHttp.forecast.forecastday[3].date).getDate()}` + ` ${monthName[new Date(finalMyHttp.forecast.forecastday[3].date).getMonth()]}`
    thirdDay.innerHTML = days[new Date(finalMyHttp.forecast.forecastday[3].date).getDay()]
}

function dataForthDay(finalMyHttp) {
    let forthDayImg = document.getElementById('forthDayImg')
    let forthDayDegree = document.getElementById('forthDayDegree')
    let forthDayDate = document.getElementById('forthDayDate')
    let forthDay = document.getElementById('forthDay')

    forthDayImg.setAttribute('src', finalMyHttp.forecast.forecastday[4].day.condition.icon)
    forthDayDegree.innerHTML = finalMyHttp.forecast.forecastday[4].day.avgtemp_c
    forthDayDate.innerHTML = `${new Date(finalMyHttp.forecast.forecastday[4].date).getDate()}` + ` ${monthName[new Date(finalMyHttp.forecast.forecastday[4].date).getMonth()]}`
    forthDay.innerHTML = days[new Date(finalMyHttp.forecast.forecastday[4].date).getDay()]

        .innerHTML = finalMyHttp.forecast.forecastday[4].date
            .innerHTML = days[new Date(finalMyHttp.forecast.forecastday[4].date).getDay()]
}

function dayDetails(finalMyHttp) {
    cartona = ``
    for (let i = 0; i < finalMyHttp.forecast.forecastday[0].hour.length; i+=2) {
        cartona += `<div  class="col-lg-2 col-md-3">
                                
                            
        <div class="text-center rounded-3 p-3 bg-lightdark">
                                    <p>${new Date(finalMyHttp.forecast.forecastday[0].hour[i].time).getHours()}:00</p>
                                    <img src="${finalMyHttp.forecast.forecastday[0].hour[i].condition.icon}" class="my-2" alt="">
                                    <p>${finalMyHttp.forecast.forecastday[0].hour[i].temp_c} °C</p>
                                </div>
                                </div>`
    }

    document.getElementById('dayDataDetails').innerHTML = cartona
}





