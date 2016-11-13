$(document).ready(function(){
// <a href="#" class="collection-item avatar">
//     <i class="material-icons circle blue">folder</i>
//     <span class="title">Title</span>
//     <p>Website Name <br> Article Date
//     </p>
// </a>

    //console.log("Requesting")
    $.ajax("https://crossorigin.me/https://www.google.com/finance/company_news?output=rss&q="+stockName).done(function(data){
        var x2js = new X2JS();
        dataStr = data.documentElement.outerHTML;
        news = x2js.xml_str2json(dataStr);
        stories = news.rss.channel.item

        var colors = ['blue', 'red', 'pink', 'indigo', 'green', 'light-blue', 'black']

        for (var i = 0; i < stories.length; i++)
        {
            story = stories[i];
            
            var newsA = $('<a href="#" class="collection-item avatar"></a>').attr('href', story.link)
            var icon = $('<i class="fa fa-newspaper-o fa-fw circle '+colors[Math.floor(Math.random()*colors.length)]+'"></i>')
            var title = $('<span class="title"></span>')
            title.append(story.title)

            var sitename = $('<p></p>')
            sitename.append(extractDomain(story.link))
            sitename.append($('<br></br>'))
            sitename.append(story.pubDate)

            newsA.append(icon)
            newsA.append(title)
            newsA.append(sitename);

            $('#newsCollection').append(newsA)
        }
    });

});