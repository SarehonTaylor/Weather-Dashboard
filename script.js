//Const Variables
let seachhistroy = [];
let weatherApiRootUrl = "https://api.openweathermap.org";
let weatherApiKey = "ba8d45d4558f27276ce537d29316860b";


let input = document.querySelector("input");
let current = document.querySelector("#current");
let historyCount = document.querySelector(".historycount");

let button = document.querySelector("#searchBtn");
// button.addEventListener("click", createHistory);
// button.addEventListener("click", getCurrent);

let array = [];
let localArray = JSON.parse(localStorage.getItem("cities"));
if (localArray !== null) {
  array = localArray;
}

for (let i = 0; i < array.length; i++) {
  let rem = document.createElement("button");
  rem.classList.add("history");
  rem.innerHTML = array[i];
  historyCount.appendChild(rem);
  historyCount.classList.add("purple");

  rem.addEventListener("click", function() {
    input.value = this.innerHTML;
  })
  rem.addEventListener("click", getCurrent);
}

function renderItems(city,data){
    rendercurrentweather(city,data.current)
    renderforcast(data.daily)
}

function rendercurrentweather(city,weather,timezone){
   let date = dayjs.unix(unixts).format('MM/DD/YYYY')
   let tempf = weather.temp   
   let {humidity} = weather.humidity
    let windmph = weather.wind_speed
    let uvi = weather.uvi
    let card = document.createElement('div')
    let cardbody = document.createElement('div')
    let heading = document.createElement('h2')
    // let weathericon = document.createElement('img')
    let tempatureEl = document.createElement('p')
    let windEl = document.createElement('p') 
    let humidityEl = document.createElement('p')
    let uvEl = document.createElement('p')
    card.setAttribute('class','card')
    cardbody.setAttribute('class','card-body')
    card.append(cardbody)
    heading.setAttribute('class','h3 card-title')
    windEl.setAttribute('class','card-text')
    humidityEl.setAttribute('class','card-text')
    tempatureEl.setAttribute('class','card-text')



    heading.textContent=`${city},${date}`
    tempatureEl.textContent = `temp: ${tempf} F`
    windEl.textContent = `wind: ${windmph}`
    humidity.textContent = `humidity: ${humidity}`
    todaycontainer.innerHTML = ""
    todaycontainer.append (card)
    
}



function checkweather () {
let {lat} = location;
let {long} = location;
let city = location.name;
let apiurl = `${weatherApiRootUrl}/geo/1.0/direct?q=${search}&limit=5&appid=${weatherApiKey}`;

fetch(apiurl)
.then(function(res){
    return res.json()
})
.then(function(data){
    renderItems(city,data)
})
.catch(function(err){
    console.error(err)
})
}

function coords(){
    var apiurl = `${weatherApiRootUrl}/geo/1.0/direct?q=${search}&limit=5&appid=${weatherApiKey}`;
fetch(apiurl)

.then(function(res){
   return res.json() 
})

.then(function(){
    if (!data[0]) {
    alert('location not found')    
    } else {
    appendhistory(search)
    checkweather(data[0])    
    }
})

.catch(function(err){
    console.error(err)
})    
}
//create card
function rendercard(){
let unixts = forcast.dt 
let iconurl //lookup weather icon api call
let icondescription = forcast.weather[0].description
let tempf = forcast.temp.day    
let {humidity} = forcast
let windmph = forcast.wind_speed

let col = document.createElement('div')
let card = document.createElement('div')
let cardbody = document.createElement('div')
let cardtitle = document.createElement('h6')
let weathericon = document.createElement('img')
let tempatureEl = document.createElement('p')
let windEl = document.createElement('p') 
let humidityEl = document.createElement('p')

col.append(card)
card.append(cardbody)
cardbody.append(cardtitle, weathericon, tempatureEl, windEl, humidityEl)

col.setAttribute('class','col-md')
col.classList.add('five-day-card')
card.setAttribute('class','card bg-primary h-100 text-white')
cardbody.setAttribute('class','card-body p-2')
cardtitle.setAttribute('class','card-title')
weathericon.setAttribute('class','card-text')
windEl.setAttribute('class','card-text')
humidityEl.setAttribute('class','card-text')
tempatureEl.setAttribute('class','card-text')

cardtitle.textContent = dayjs.unix(unixts).format('MM/DD/YYYY')
weathericon.setAttribute('src', iconurl)
weathericon.setAttribute('alt',icondescription)
tempatureEl.textContent = `temp: ${tempf} F`
windEl.textContent = `wind: ${windmph}`
humidity.textContent = `humidity: ${humidity}`

forcastContainer.append(col)
console.log()
}