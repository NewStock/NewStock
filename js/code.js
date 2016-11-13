var form = document.getElementById('search-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var query = document.getElementById('search').value;
    window.location.href = '/stock.html?stock=' + query;
});