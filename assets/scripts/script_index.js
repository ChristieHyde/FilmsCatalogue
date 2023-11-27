const OMDB_API_KEY = "eae9958"; // Add after every OMDB request


var searchInput = document.getElementById("search-input");
var lastSearched = localStorage.getItem(searchInput);
var movieTitle = document.getElementById('result-content');
var repoEl = document.createElement('div');
var titleEl = document.createElement('button');
var movieFound = localStorage.getItem(titleEl);
console.log(movieFound);

document.querySelector('form.search-form').addEventListener('submit', function (e) {
    e.preventDefault();

    movieTitle.textContent = 'Search Result '
    var text = searchInput.value;

    if (searchInput.value === '') {
        movieTitle.textContent = 'No movie can be found!'
    }
    else {
    localStorage.setItem(searchInput, text);
    console.log(searchInput.value);
    movieTitle.textContent = movieTitle.textContent + '"' + searchInput.value + '"';
    
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
                var titleName = data.Title + ' | ' + data.Rated + ' | ' + data.Runtime;
                repoEl.setAttribute('style', 'flex: 0 0 75%')

                titleEl.textContent = titleName;
                titleEl.setAttribute('style', 'font-size: 20px; margin-left: 5%; border: 2px solid');
                titleEl.setAttribute('class', 'more-info');
                var titleMovie = data.Title;

                repoEl.appendChild(titleEl);
                movieTitle.appendChild(repoEl);
                localStorage.setItem(titleEl, titleMovie);
            }
        });
    } 
})

movieTitle.onclick = function () {
    location.replace('details.html');
}


console.log(lastSearched);


