//Const Variables
let seachhistroy = [];
let weatherApiRootUrl = "https://api.openweathermap.org";
let weatherApiKey = "ba8d45d4558f27276ce537d29316860b";


let input = document.querySelector("input");
let current = document.querySelector("#current");
let historyCount = document.querySelector(".historycount");

let button = document.querySelector("#searchcity");
button.addEventListener("click", createHistory);
button.addEventListener("click", getCurrent);

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