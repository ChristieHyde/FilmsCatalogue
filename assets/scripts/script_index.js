var searchInput = document.getElementById("search-input");

document.querySelector('form.search-form').addEventListener('submit', function (e) {
    e.preventDefault();

    console.log(searchInput.value);
})