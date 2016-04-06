// javascript code

// variables for all templates
var categories_template, gallery_template, photos_template;

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

    source = $("#gallery-template").html();
    gallery_template = Handlebars.compile(source);

    source = $("#photo-template").html();
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
        if (current_category) {
            show_template(gallery_template, current_category);
            $(".nav-tabs .active").removeClass("active");
            $("#gallery-tab").addClass("active");

            // Clicking the animal thumbnail carry us to the image and description.
            $(".animal-thumb").click(function() {
                var index = $(this).data("id");
                current_animal = current_category.animals[index];
                $("#photo-tab").click();
            });
        } else {
            show_template(categories_template, animals_data);
            $(".nav-tabs .active").removeClass("active");
            $("#categories-tab").addClass("active");
            $("#category-list").append("<div class='alert alert-warning' role='alert'>Please, select a category before</div>");
            $(".list-group-item").click();

            // Clicking in the categories listed shows the animnals in the category
            $(".list-group-item").click(function() {
                var index = $(this).data("id");
                current_category = animals_data.category[index];
                $("#gallery-tab").click();
            });
        }
    });

    // Clicking in the photo tab shows te photo of the current animal
    $("#photo-tab").click(function() {
        if (current_animal) {
            show_template(photos_template, current_animal);
            $(".nav-tabs .active").removeClass("active");
            $("#photo-tab").addClass("active");

            // Clicking the photo carry us back to the gallery.
            $(".animal-photo").click(function() {
                $("#gallery-tab").click();
            });
        } else if (current_category) {
            show_template(gallery_template, current_category);
            $(".nav-tabs .active").removeClass("active");
            $("#gallery-tab").addClass("active");
            $("#gallery").append("<div class='col-xs-12'><div class='alert alert-warning' role='alert'>Please, select an animal to view its details.</div></div>");
        } else {
            $("#gallery-tab").click();
        }
    });

    $("#categories-tab").click();

});
