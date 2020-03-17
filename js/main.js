var source = $("#card-template").html();
var template = Handlebars.compile(source);

$('.selettore-genere').change(function(){
    var selezionato = $(this).val();
    // console.log(selezionato);
    if (selezionato == '') {
        $('.card-album').show();
    } else {
        $('.card-album').each(function () {
            if (selezionato.toLowerCase() == $(this).data('genere').toLowerCase()) {
                $(this).show();
            } else {
                $(this).hide();
            };
        });
    }
});

$.ajax({
    url: 'https://flynn.boolean.careers/exercises/api/array/music',
    method: 'GET',
    success: function (data) {
        var libreriaAlbum = data.response;
        // console.log(libreriaAlbum);
        for (var i = 0; i < libreriaAlbum.length; i++) {
            var album = libreriaAlbum[i]
            var insiemeAlbum = {
                coverAlbum: album.poster,
                titoloAlbum: album.title,
                autoreAlbum: album.author,
                annoAlbum: album.year,
                genereAlbum: album.genre,
            }
            // console.log(insiemeAlbum);
            var cardSingola = template(insiemeAlbum);
            $('.card-container').append(cardSingola);
            // console.log(cardSingola);
        }
    },
    error: function () {
        alert('ERRORISSIMO!!!!');
    }
});
