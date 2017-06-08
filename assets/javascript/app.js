/*$(document).ready(function () {*/




    $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?tags=florida,scuba&format=json&nojsoncallback=1", function(data){
        $.each(data.items, function(i,item){
            $("<img/>").attr("src", item.media.m).appendTo("#images")
                .wrap("<a href='" + item.link + "'></a>");
        });

    });


/*});*/

