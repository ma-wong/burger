// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-state").on("click", function(event) {
        let id = $(this).data("id");
        let newState = $(this).data("newState");

        let newDevourState = {
            devour: newState
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log("changed state to", newState);

                location.reload();
            }
        )
    });
    
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger-name").val().trim()
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Added New Burger!");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});