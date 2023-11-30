const DEBUG = false;
const OMDB_API_KEY = "eae9958"; // Add after every OMDB request

var searchInput = document.getElementById("search-input");
var lastSearched = localStorage.getItem(searchInput);
var movieTitle = document.getElementById('result-content');
var repoEl = document.createElement('div');
var titleEl = document.createElement('p');
var movieFound = 'movieFound';

document.querySelector('form.search-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the input from the search bar
    var text = searchInput.value;

    if (searchInput.value === '') {
        movieTitle.textContent = 'No movie can be found!'
    }
    else {
    localStorage.setItem(searchInput, text);
    movieTitle.textContent = 'Search Results for "' + searchInput.value + '"';
    
    // Make the API call
    var searchMovie = searchInput.value;
    var apiRequest = "https://www.omdbapi.com/?t=" + searchMovie + "&apikey=" + OMDB_API_KEY;

    fetch(apiRequest)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // Build the results card
            var titleName = 'Title: ' + data.Title + ' | Rating: ' + data.Rated + ' | Time: ' + data.Runtime  + ' | Year Of Release: ' + data.Year;
            repoEl.setAttribute('style', 'flex: 0 0 75%');
            
            titleEl.textContent = titleName;
            titleEl.setAttribute('class', 'result-card');

            // Add event listener to the results card
            repoEl.onclick = function () {
                localStorage.setItem(movieFound, data.Title);
                location.replace('details.html');
            }
            repoEl.appendChild(titleEl);
            movieTitle.appendChild(repoEl);            
        });
    } 
})

// API TESTS: Change DEBUG constant to true to run tests
if (DEBUG) {
    console.log("OMDb API Test");

    var testMovie = "harry potter";
    var testRequest = "https://www.omdbapi.com/?t=" + testMovie + "&apikey=" + OMDB_API_KEY;

    fetch(testRequest)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            if (!data) {
                console.log("Test failed");
            } else {
                console.log("Test complete! Request results:");
                console.log(data);
            }
        });
}