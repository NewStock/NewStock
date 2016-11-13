$(document).ready(function(){
// <a href="#twitter-1" class="collection-item avatar">
//     <img src="PIC" alt="" class="circle responsive-img"></img>
//     <span class="title">NAME</span>
//     <p class="truncate">TWITTER HANDLE <br> TWEET
//     </p>
// </a>
// <div id="twitter-1" class="modal">
//     <div class="modal-content">
//         <h4><img src="PIC" alt="" class="circle responsive-img">NAME (TWITTER HANDLE)</h4>
//         <p>TWEET</p>
//     </div>
//     <div class="modal-footer">
//         <div class="divider"></div>
//         <a href="LINK" class="modal-action modal-close waves-effect waves-blue btn-flat">View on <i class="fa fa-twitter fa-fw"></i></a>
//         <a href="LINK" class="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
//     </div>
// </div>

    //console.log("Requesting")
    $.ajax("https://crossorigin.me/http://13.92.28.18/tweets/?tag=$"+stockName).done(function(tweets){
        tweets = tweets.statuses;

        $('#twitter-loader').css({'display':'none'})
        //console.log("Got ajax");
        //tweets = JSON.decode(result).statuses;
        //console.log(tweets)
        for(var i = 0; i < Math.min(12, tweets.length); i++)
        {
            tweet = tweets[i];
            console.log(tweet.user.name + " - " + tweet.text);
            console.log(tweet)

            var link = "https://twitter.com/statuses/" + tweet.id_str;

            //Make the A that goes before the div
            var theA = $('<a href="#twitter-'+i+'" class="collection-item avatar"></a>')
            var theImg = $('<img src="" alt="" class="circle responsive-img"></img>').attr('src', tweet.user.profile_image_url)
            var nameSpan = $('<span class="title"></span>')
            nameSpan.append(tweet.user.name)
            var handleP = $('<p class="truncate"></p>')
            handleP.append('@'+tweet.user.screen_name)
            handleP.append($('<br>'))
            handleP.append(tweet.text)

            theA.append(theImg)
            theA.append(nameSpan)
            theA.append(handleP)

            //Make the div
            var theDiv = $('<div id="twitter-'+i+'" class="modal"></div>')

            var content = $('<div class="modal-content"></div>')
            var anH4 = $('<h4></h4>')
            anH4.append(tweet.user.name)
            anH4.append("(" + tweet.user.screen_name + ")")
            var theImg2 = $('<img src="" alt="" class="circle responsive-img"></img>').attr('src', tweet.user.profile_image_url)
            anH4.prepend(theImg2)
            var tweetP = $('<p></p>')
            tweetP.append(tweet.text)
            content.append(anH4)
            content.append(tweetP)

            theDiv.append(content)

            var footer = $('<div class="modal-footer"></div>')
            var divider = $('<div class="divider"></div>')
            var viewOnTwitter = $('<a href="LINK" class="modal-action modal-close waves-effect waves-blue btn-flat">View on <i class="fa fa-twitter fa-fw"></i></a>').attr('href', link)
            var close = $('<a class="modal-action modal-close waves-effect waves-green btn-flat">Close</a>')

            footer.append(divider)
            footer.append(viewOnTwitter)
            footer.append(close)

            theDiv.append(footer)

            $("#twitterFeed").append(theA)
            $("#twitterFeed").append(theDiv)
        }

        $('.modal').modal()

    });

});

// var tweetLi = $("<li></li>");
//             var header = $('<div class="collapsible-header"></div>')
//             var chip = $('<div class="chip"></div>')
//             var profilePic = $('<img src="'+tweet.user.profile_image_url+'"></img>')
//             chip.append(profilePic);
//             chip.append(tweet.user.name);
//             header.append(chip)
//             header.append("First")

//             var body = $('<div class="collapsible-body"></div>')
//             var twitterbutton = $('<a class="light-blue waves-effect waves-light btn left">VIEW ON <i class="fa fa-twitter fa-fw"></i></a>')
//             var ptext = $('<p></p>')
//             ptext.append(tweet.text)
//             ptext.append($('<br></br>'))
//             ptext.append(twitterbutton)
//             body.append(ptext)

//             tweetLi.append(header)
//             tweetLi.append(body)
//             $('#twitterFeed').append(tweetLi);