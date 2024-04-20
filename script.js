function validate() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var inputAddress = document.getElementById("inputAddress").value;

    if (name == "") {
        alert("Must fill the Name field");
        document.getElementById("name").focus();
        return false;
    } else if (phone == "") {
        alert("Must fill the Phone field");
        document.getElementById("phone").focus();
        return false;
    } else if (inputAddress == "") {
        alert("Must fill the Address field");
        document.getElementById("inputAddress").focus();
        return false;
    } else {
        // If validation passes, submit the form data
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbzhaKv1CAGpRG7U4QRfXKefHsnpHqnaNhfD2S8A5gW4K-OIQRikFctVeqeEjCGW1Tb2hw/exec",
            data: $("#submit-form").serialize(),
            method: "post",
            success: function (response) {
                alert("Form submitted successfully");
                // Clear form fields if needed
                $('#submit-form')[0].reset();
            },
            error: function (err) {
                alert("Something went wrong. Please try again later.");
            }
        });
        return true;
    }
}

