$(document).ready(function(){

    var form = document.getElementById('search-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var query = document.getElementById('search').value;
        if (query.length > 5) window.location.href = '/404.html'
        else window.location.href = '/stock.html?stock=' + query;
    });

    var form_mobile = document.getElementById('search-form-mobile');
    form_mobile.addEventListener('submit', function (e) {
        e.preventDefault();
        var query = document.getElementById('search-mobile').value;
        if (query.length > 5) window.location.href = '/404.html'
        else window.location.href = '/stock.html?stock=' + query;
    });

    $("#closebutton").click(function () {
    document.getElementById("search").value = "";
    });

    $('input.autocomplete').autocomplete({limit: 10, data: $.extend(NASDAQ_auto, NYSE_auto)});
});