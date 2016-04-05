// javascript code

// variables for all templates
var categories_template, animals_template;

// current variables to sabe between the clics of differents sections
var current_category = animals_data.category[0];
var current_animal = current_category.animals[0];

function show_template(template, data) {
    var html = template(data);
    $("#content").html(html);
}

$(document).ready(function() {

    // Compilation of templates.
    var source = $("#categories-template").html();
    categories_template = Handlebars.compile(source);

    source = $("#animals-template").html();
    animals_template = Handlebars.compile(source);

    // Clicking in the categories tab shows all the categories.
    $("#categories-tab").click(function() {

        show_template(categories_template, animals_data);
        $(".nav-tabs .active").removeClass("active");
        $("#categories-tab").addClass("active");

        // Clicking in the categories listed shows the animnals in the category
        $(".list-group-item").click(function (){
            var index = $(this).data("id");
            current_category = animals_data.category[index];
            show_template(animals_template, current_category);
            console.log(current_category);
        });
    });

    $("#categories-tab").click();

});
