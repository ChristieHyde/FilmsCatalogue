const OMDB_API_KEY = "eae9958"; // Add after every OMDB request
const DEBUG = true;


var searchInput = document.getElementById("search-input");
var lastSearched = localStorage.getItem(searchInput);
var movieTitle = document.getElementById('result-text');

document.querySelector('form.search-form').addEventListener('submit', function (e) {
    e.preventDefault();

    var text = searchInput.value;
    localStorage.setItem(searchInput, text);
    console.log(searchInput.value);
    movieTitle.textContent = searchInput.value;
    
    // API TESTS: Change DEBUG constant to true to run tests
    console.log("OMDb API Test");

    var testMovie = searchInput.value;
    var testRequest = "http://www.omdbapi.com/?t=" + testMovie + "&apikey=" + OMDB_API_KEY;

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
                console.log(data.Title);
            }
        }); 

    displayMovies();
})

function displayMovies(data) {
    for (var i = 0; i < data.length; i++) {

        var titleName = data[i].Title;
        var repoEl = document.createElement('div');
        repoEl.classList = 'list-item flex-row justify-space-between align-center';

        var titleEl = document.createElement('p');
        titleEl.textContent = titleName;

        repoEl.appendChild(titleEl);
        movieTitle.appendChild(repoEl);
    }

}


console.log(lastSearched);


