/*$(document).ready(function () {*/

console.log("flickr ready!")


   /* $.getJSON("https://cors-bcs.herokuapp.com/https://api.flickr.com/services/feeds/photos_public.gne?tags=florida,scuba&format=json&nojsoncallback=1", function(data){
        $.each(data.items, function(i,item){
            $("<img/>").attr("src", item.media.m).appendTo("#images")
                .wrap("<a href='" + item.link + "'></a>");
        });

    });*/


$.getJSON("https://cors-bcs.herokuapp.com" + "/https://api.flickr.com/services/feeds/photos_public.gne?tags=florida,scuba&format=json&nojsoncallback=10", function(data){
    $.each(data.items, function(i,item){
        $("<img/>").attr("src", item.media.m).appendTo("#images")
            .wrap("<a href='" + item.link + "'></a>");
    });

    $("#title").html(data.title);
    $("#description").html(data.description);
    $("#link").html("<a href='"+data.link+"' target=\"_blank\">Visit the Viget Inspiration Pool!</a>");
    //Notice that the object here is "data" because that information sits outside of "items" in the JSON feed

    $('#images').cycle({
        fx:     'fade',
        speed:    'normal',
        timeout:  0,
        next:   '#next',
        prev:   '#prev'
    });
});


/*});*/

