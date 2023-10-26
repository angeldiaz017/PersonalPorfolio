$(document).ready(function() {
    $(".description_4").each(function() {
        var color1 = $(this).data("color1");
        var color2 = $(this).data("color2");


        var gradient = `linear-gradient(to right, ${color1}, ${color2}`;
        $(this).css("border-image-source", gradient);
    });
});
