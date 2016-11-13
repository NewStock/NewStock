$(document).ready(function(){
// <li>
//     <div class="collapsible-header">
//         <div class="chip">
//             <img src="http://i.imgur.com/Oouib2B.png" alt="Contact Person"> Norman Gordon
//         </div>
//         First
//     </div>
//     <div class="collapsible-body">
//         <p>$AAPL up big today, can't wait to see how they do tomorrow!
//             <a class="light-blue waves-effect waves-light btn left">VIEW
//                                 ON <i class="fa fa-twitter fa-fw"></i></a></p>
//     </div>
// </li>

    //console.log("Requesting")
    $.ajax("https://crossorigin.me/http://13.92.28.18/tweets/?tag=$"+stockName).done(function(tweets){
        tweets = tweets.statuses;
        //console.log("Got ajax");
        //tweets = JSON.decode(result).statuses;
        //console.log(tweets)
        for(var i = 0; i < Math.min(5, tweets.length-1); i++)
        {
            tweet = tweets[i];
            console.log(tweet.user.name + " - " + tweet.text);

            var tweetLi = $("<li></li>");
            var header = $('<div class="collapsible-header"></div>')
            var chip = $('<div class="chip"></div>')
            var profilePic = $('<img src="'+tweet.user.profile_image_url+'"></img>')
            chip.append(profilePic);
            chip.append(tweet.user.name);
            header.append(chip)
            header.append("First")

            var body = $('<div class="collapsible-body"></div>')
            var twitterbutton = $('<a class="light-blue waves-effect waves-light btn left">VIEW ON <i class="fa fa-twitter fa-fw"></i></a>')
            var ptext = $('<p></p>')
            ptext.append(tweet.text)
            ptext.append($('<br></br>'))
            ptext.append(twitterbutton)
            body.append(ptext)

            tweetLi.append(header)
            tweetLi.append(body)
            $('#twitterFeed').append(tweetLi);
        }

    });

});