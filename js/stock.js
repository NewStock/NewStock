$(document).ready(function() {

    $('#stockName').html(stockName);

    updateFunc = function(){
    $.ajax({url: "http://finance.yahoo.com/d/quotes.csv?s="+stockName+"&f=napc8", success: function(data)
    {
        data = CSVtoArray(data);
        console.log(data);

        var name = data[0];
        var price = data[1];
        var close = data[2];
        var aa = data[3];

        //hide the aa span if there's no after hours
        if (aa==="N/A") $('#afterHours').css({display: "none"});

        //Find the difference in price between now and last close
        var diff = (price-close).toFixed(2);
        var sign = diff > 0 ? "+" : "-";
        $('#price').html(price);

        //update the diff span
        var dspan = $('#diff');
        dspan.html("(" + sign + ' $' + Math.abs(diff) + ")").removeClass('green-text red-text');
        if(diff > 0) dspan.addClass('green-text');
        else dspan.addClass('red-text');
        
        //Update the after hours span
        var aaspan = $('#afterHours');
        aaspan.html("(" + sign + ' $' + Math.abs(aa) + ") After Hours").removeClass('green-text red-text');
        if(aa > 0) aaspan.addClass('green-text')
        else aaspan.addClass('red-text');
    }})};

    updateFunc();

    setInterval(updateFunc, 6000*10);

    });
// setInterval(function()
// {
//     price = $.ajax()
// }, 30);