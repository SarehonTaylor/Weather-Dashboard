onst history = JSON.parse(localStorage.getItem('inputCity')

//filters history
const uniqueHistory = [...new Set (history)

//call openweathermap data for lastCity
function buildContent(city) {
    //get last city in history array
// conv lastCity to cordinates
Geolocation ='https://api.open

fetch(Geolocation)
.then(responce => responce.json())
.then(data => {
    console.log(data);
})
});
}

//search bar and button
searchButton.click(function () {
inputCity = searchBar.val()
//push current inputCity to cityArray via LocalStorage
history.pushState(inputCity);
localStorage.setItem('inputCity', JSON.stringify(history));
buildContent(inputCity);
});

//create search history buttons
for (i = 0; i < uniqueHistory.length; i++) {
    searchHistory.prepend(
    $'<button/>'
    .addClass('.historyBtn')
    .text(uniqueHistory)[i])
    );
}