const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach((button, index) => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        const card = this.closest('.card');
        const radioInputs = card.querySelectorAll("input[type='radio']");
        const selectedInput = [...radioInputs].find(input => input.checked);

        if (selectedInput) {
            selectedInput.disabled = true;
            const values = selectedInput.value;

            const popup = document.createElement("div");
            popup.classList.add("popup");
            popup.innerHTML = `
                <i class="fa-regular fa-circle-check"></i>
                <p>Your Booking is <b>CONFIRMED</b></p>
                <hr class="dotted-line">
                <p><strong>Your meeting is booked at </strong>${values}</p>
                <hr class="dotted-line">
                <p><b>See you soon!</b></p>
            `;
            document.body.appendChild(popup);
            setTimeout(function () {
                document.body.removeChild(popup);
            }, 3000);
        } else {
            // Handle case when no radio input is selected
            console.log("Please select a time slot.");
        }

        // Reset form after submission
        radioInputs.forEach(input => input.disabled = false);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var bellIcon = document.querySelector(".notification_icon .fas.fa-bell");
    var dropdown = document.querySelector(".dropdown");

    bellIcon.addEventListener("click", function() {
        dropdown.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function(event) {
        if (!event.target.closest('.notification_wrap')) {
            dropdown.classList.remove("active");
        }
    });
});
