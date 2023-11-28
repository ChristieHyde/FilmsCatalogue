const OMDB_API_KEY = "eae9958"; // Add after every OMDB request
var titleDivEl = document.getElementById('title-div');
var posterEl = document.getElementById('poster-img');
var plotEl = document.getElementById('plot');
var propertiesListEl = document.getElementById('movie-properties');

// Data points to include on the details page
var movieTitle, movieReleaseYear, movieReleaseDate, movieRuntime, 
    movieContentRating,movieCriticRatings, movieActors, movieDirector, 
    moviePlotSummary, moviePosterURL;

console.log("hi");
init();

function init() {
    // Get the searched movie from local storage
    movieTitle = localStorage.getItem("movieFound");
    if (!movieTitle) {
        return;
    }
    //localStorage.removeItem("movieFound");

    // Make another API call to get the detailed information
    var apiRequest = "https://www.omdbapi.com/?t=" + movieTitle + "&apikey=" + OMDB_API_KEY;
    console.log(movieTitle);

    fetch(apiRequest)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            movieContentRating = data.Rated; 
            movieCriticRatings = data.Ratings;

            var properties = ["Release Date: " + data.Released, "Genre: " + data.Genre,
            "Runtime: " + data.Runtime, "Content Rating: " + data.Rated,
            "Director: " + data.Director, "Actors: " + data.Actors,
            "Metacritic Score: " + data.Metascore] // decide critic source later?

            // Put the information on the page
            titleDivEl.textContent = movieTitle + " (" + data.Year + ")";
            posterEl.setAttribute("src", data.Poster);
            plotEl.textContent = data.Plot;

            properties.forEach(property => {
                var propertyListItemEl = document.createElement('li');
                propertyListItemEl.textContent = property;
                propertiesListEl.appendChild(propertyListItemEl);
            });
        });
}