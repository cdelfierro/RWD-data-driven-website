// javascript code

// variables for all templates
var categories_template, animals_template, photos_template;

// current variables to sabe between the clics of differents sections
var current_category = null;
var current_animal = null;

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

    source = $("#photos-template").html();
    photos_template = Handlebars.compile(source);

    // Clicking in the categories tab shows all the categories.
    $("#categories-tab").click(function() {
        show_template(categories_template, animals_data);
        $(".nav-tabs .active").removeClass("active");
        $("#categories-tab").addClass("active");

        // Clicking in the categories listed shows the animnals in the category
        $(".list-group-item").click(function() {
            var index = $(this).data("id");
            current_category = animals_data.category[index];
            $("#gallery-tab").click();
        });
    });

    // Clicking in the gallery tab shows the gallery of the current category.
    $("#gallery-tab").click(function() {
        console.log(current_category);
        if (current_category) {
            show_template(animals_template, current_category);
        } else {
            $("#categories-tab").click();
        }
        $(".nav-tabs .active").removeClass("active");
        $("#gallery-tab").addClass("active");

        // Clicking the animal thumbnail carry us to the image and description.
        $(".animal-thumb").click(function() {
            console.log(current_animal);
            var index = $(this).data("id");
            current_animal = current_category.animals[index];
            show_template(photos_template, current_animal);

            // Clicking the photo carry us back to the gallery.
            $(".animal-photo").click(function() {
                $("#gallery-tab").click();
            });
        });
    });

    $("#categories-tab").click();

});
