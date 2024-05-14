function addExpense() {
    // Validate the input fields if necessary
    // Simulate file upload process
    var fileUpload = document.getElementById('fileUpload').files[0];

    if(fileUpload) {
        // Perform file reading or processing here
        console.log('File to upload:', fileUpload.name);
        // Simulate adding file information to P3
        // This is where you would normally handle the file upload,
        // send the file to the server, and redirect or update the page
        // as needed. For this example, we'll just log to the console
        // and redirect.
        window.location.href = 'P3.html';
    } else {
        alert('Please select a file to upload.');
    }
}

// This function would be used if you want to handle the file selection process
document.getElementById('fileUpload').onchange = function() {
    var fileUpload = document.getElementById('fileUpload').files[0];
    console.log('File selected:', fileUpload.name);
    // You can handle the file object here, e.g., read its content
    // or prepare it for uploading to the server.
};
