var source = $("#card-template").html();
var template = Handlebars.compile(source);

$.ajax({
    url: 'https://flynn.boolean.careers/exercises/api/array/music',
    method: 'GET',
    success: function (data) {
        var libreriaAlbum = data.response;
        // console.log(libreriaAlbum);
    },
    error: function () {
        alert('ERRORISSIMO!!!!');
    }
});
