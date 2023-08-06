document.getElementById("jobApplicationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Form verilerini JSON olarak göster
    const jsonData = JSON.stringify(formData, null, 2);
    document.getElementById("jsonOutput").innerHTML = "<pre>" + jsonData + "</pre>";
});
