const form = document.getElementById("reservationForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const inputs = form.querySelectorAll("input");
        let valid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                valid = false;
                input.style.border = "2px solid red";
            } else {
                input.style.border = "1px solid #ccc";
            }
        });

        if (valid) {
            alert("Reservation Successful 🎉");
            form.reset();
        } else {
            alert("Please fill all fields correctly.");
        }
    });
}