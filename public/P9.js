function addExpense() {
    const phone = document.getElementById('phone').value;
    const amount = document.getElementById('amount').value;
    const dueDate = document.getElementById('dueDate').value;
    const file = document.getElementById('fileUpload').files[0];
    
    // Add the logic to handle the expense addition here

    console.log(`Phone: ${phone}, Amount: ${amount}, Due Date: ${dueDate}, File: ${file ? file.name : 'No file uploaded'}`);
}
