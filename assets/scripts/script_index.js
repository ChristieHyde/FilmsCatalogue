const OMDB_API_KEY = "eae9958"; // Add after every OMDB request
const DEBUG = true;

var searchInput = document.getElementById("search-input");
var lastSearched = localStorage.getItem(searchInput);

document.querySelector('form.search-form').addEventListener('submit', function (e) {
    e.preventDefault();

    var text = searchInput.value;
    localStorage.setItem(searchInput, text);
    console.log(searchInput.value);
    
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
            }
        });
})

console.log(lastSearched);


