const DEBUG = true;
const OMDB_API_KEY = "eae9958"; // Add after every OMDB request














// API TESTS: Change DEBUG constant to true to run tests

if (DEBUG) {
    // OMDB API TEST
    console.log("OMDb API Test");

    var testMovie = "barbie"
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
}