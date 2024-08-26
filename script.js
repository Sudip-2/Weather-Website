const apiKey = "1535a9cc16cf4ac4ac0165508242508"
const url = "http://api.weatherapi.com/v1/current.json?key="

window.addEventListener("load",() => {
    fetchWeather('Mumbai')
})

async function fetchWeather(query){
    let response = await fetch(`${url}${apiKey}&q=${query}&aqi=yes`)
    const data = await response.json()
    bindData(data,query)
}
//, search ,

function bindData(data,query){
    fillData(data,query)
}

function fillData(data,query){
    const temp = document.getElementById('temp')
    const cityName = document.getElementById('cityName')
    const humidPercent = document.getElementById('humidPercent')
    const windSpeed = document.getElementById('windSpeed')
    const weatherPhoto = document.getElementById('weather-logo')
    const overcast = document.getElementById('weatherDesc')

    cityName.innerText = data.location.name
    weatherPhoto.src = data.current.condition.icon
    temp.innerText = `${data.current.temp_c} c`
    humidPercent.innerText = `${data.current.humidity}%`
    windSpeed.innerText = `${data.current.wind_mph} mp/h`
    overcast.innerText = data.current.condition.text
}

const searchIcon = document.getElementById('search-icon')
searchIcon.addEventListener('click',() => {
    const input = document.getElementById('search')
    fetchWeather(input.value)
})
window.addEventListener('keydown',(e) => {
    if(e.key == 'Enter'){
        const input = document.getElementById('search')
    fetchWeather(input.value)
    }
})