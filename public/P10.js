document.getElementById('expensesForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally
    uploadExpenseData();
});

function uploadExpenseData() {
    var fileUpload = document.getElementById('fileUpload');
    if (fileUpload.files.length > 0) {
        var file = fileUpload.files[0];
        console.log('File ready for upload:', file.name);
        // Here you would typically send the file to the server.
        // For demonstration purposes, we'll just simulate redirection to P3.html
        window.location.href = 'P3.html';
    } else {
        alert('Please select a file to upload.');
    }
}

document.getElementById('fileUpload').addEventListener('change', function() {
    console.log('Selected file:', this.files[0].name);
});
