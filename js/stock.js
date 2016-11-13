$(document).ready(function() {

    $('#stockName').html(stockName);

    updateFunc = function(){
    $.ajax({url: "https://crossorigin.me/http://finance.yahoo.com/d/quotes.csv?s="+stockName+"&f=napc8ohgj1vj2mkj", success: function(data)
    {
        data = CSVtoArray(data);
        console.log(data);

        var name = data[0];
        var price = data[1];
        var close = data[2];
        var aa = data[3];
        var open = data[4];
        var high = data[5];
        var low = data[6];
        var cap = data[7];
        var volume = data[8];
        var shares = data[9];
        var range = data[10];
        var high52 = data[11];
        var low52 = data[12];

        //set page title
        document.title = stockName + ": " + name + " | NewStock";

        //hide the aa span if there's no after hours
        if (aa==="N/A") $('#afterHours').css({display: "none"});

        //Find the difference in price between now and last close
        var diff = (price-close).toFixed(2);
        var sign = diff > 0 ? "+" : "-";
        $('#price').html((1*price).toFixed(2));

        //update the diff span
        var dspan = $('#diff');
        dspan.html("(" + sign + ' $' + Math.abs(diff).toFixed(2) + ")").removeClass('green-text red-text');
        if(diff > 0) dspan.addClass('green-text');
        else dspan.addClass('red-text');
        
        //Update the after hours span
        var aaspan = $('#afterHours');
        aaspan.html("(" + sign + ' $' + Math.abs(aa) + ") After Hours").removeClass('green-text red-text');
        if(aa > 0) aaspan.addClass('green-text')
        else aaspan.addClass('red-text');

        makeSpanText = function(num)
        {
            var sign = (num > 0);
            var signChar = sign ? '+' : '-';
            return signChar + ' $'+Math.abs(num);
        }

        $('#open').html(makeSpanText(open));
        $('#high').html(makeSpanText(high));
        $('#low').html(makeSpanText(low));

        //market cap--- wrong data!!!!
        $('#cap').html(makeSpanText(cap.substring(0,cap.length-1)) + "B");
        $('#volume').html(makeSpanText(volume));
        $('#shares').html(makeSpanText(shares));

        range = range.split(" - ");
        rlow = "$"+((1*range[0]).toFixed(2));
        rhigh = "$"+((1*range[1]).toFixed(2));

        $('#range').html(rlow + " - " + rhigh); //NOT A NUMBER!
        $('#high52').html(makeSpanText(high52));
        $('#low52').html(makeSpanText(low52));
    }})};

    updateFunc();

    setInterval(updateFunc, 1000*10);

    });
// setInterval(function()
// {
//     price = $.ajax()
// }, 30);