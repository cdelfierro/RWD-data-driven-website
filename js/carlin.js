// javascript code

var categories_template;

function show_template(template, data) {
    var html = template(data);
    $("#content").html(html);
}

$(document).ready(function() {

    var source = $("#categories-template").html();
    categories_template = Handlebars.compile(source);

    $("#categories-tab").click(function() {

        show_template(categories_template, animals_data);
        $(".nav-tabs .active").removeClass("active");
        $("#categories-tab").addClass("active");
    });

    $("#categories-tab").click();

});
