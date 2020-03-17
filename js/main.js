var source = $("#card-template").html();
var template = Handlebars.compile(source);

$('.card-container').append(template);
