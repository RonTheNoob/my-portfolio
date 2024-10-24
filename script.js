function copyToClipboard(event) {

    event.preventDefault();

    // Get the text field
    var copyText = document.getElementById("emailText");
 
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Optionally, alert the user that the text was copied
    alert("Copied email for Ronnie to clipboard: " + copyText.value);
}