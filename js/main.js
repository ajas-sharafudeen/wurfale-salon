(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

})(jQuery);

// Form Submission using AJAX
$("#submit-form").submit((e) => {
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzSp3aNedvracGmuB57Kn_EUvuGkhyeK_0ve-iF5VCs4QAtWolvLOUqzC_cMex2n_R5/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (response) {
            // Success
        },
        error: function (err) {
            alert("Something Error")

        }
    })
})

// Form Submission animations
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("submit-form");
    const submitBtn = document.getElementById("submit-btn");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        // Animate button
        submitBtn.classList.add("animate");
        setTimeout(function () {
            // Display success message
            successMessage.classList.remove("hidden");
            // Reset form after 5 seconds
            setTimeout(function () {
                form.reset();
                successMessage.classList.add("hidden");
                submitBtn.classList.remove("animate");
            }, 3000);
        }, 2000); // Adjust delay as needed
    });
});
