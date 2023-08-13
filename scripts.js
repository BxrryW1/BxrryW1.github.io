// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    "use strict"; // Enable strict mode for this function's scope

    // Get references to elements
    var navigation = document.getElementById("navigation"),
        createdByMe = document.querySelector(".created-by-me"),
        displayBox = document.querySelector(".display-box"),
        iframe = displayBox.querySelector("iframe"),
        displaySection;

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Add a scroll event listener
    window.addEventListener("scroll", function () {
        // Calculate opacity based on scroll position
        var opacity = 1 - (window.scrollY / 500);

        // Apply opacity to elements
        navigation.style.opacity = createdByMe.style.opacity = opacity;

        // Get the display section
        displaySection = document.querySelector(".display-section");

        // Set the display box height based on visibility of display section
        displayBox.style.height = isInViewport(displaySection)
            ? iframe.clientHeight + "px"
            : "0";
    });

    // Get all affiliate and foundation links
    var links = document.querySelectorAll(".affiliate-link, .foundation-link");

    // Set up click event listeners for links
    links.forEach(link = > {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Get the URL from the data attribute
            var url = this.getAttribute("data-url");

            // Set the iframe source and display the display box
            iframe.src = url;
            displayBox.style.display = "block";
        });
    });
});