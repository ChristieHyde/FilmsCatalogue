var searchInput = document.getElementById("search-input");
var lastSearched = localStorage.getItem(searchInput);

document.querySelector('form.search-form').addEventListener('submit', function (e) {
    e.preventDefault();

    var text = searchInput.value;
    localStorage.setItem(searchInput, text);
    console.log(searchInput.value);
})

console.log(lastSearched);