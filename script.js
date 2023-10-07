// Get references to the input fields and button
const amountEl = document.getElementById("amount-el");
const descriptionEl = document.getElementById("description-el");
const submitBtn = document.getElementById("submit-btn");
const imageCtn = document.getElementById("image-ctn");

// Add an event listener to the input fields to select all text when focused
amountEl.addEventListener("focus", function () {
    this.select(); // Select all text in amountEl
});

descriptionEl.addEventListener("focus", function () {
    this.select(); // Select all text in descriptionEl
});

// // Add an event listener to the document for keydown events
// document.addEventListener("keydown", (event) => {
//     // Check if the "Enter" key (key code 13) was pressed
//     if (event.keyCode === 13) {
//         // Prevent the default form submission behavior
//         event.preventDefault();

//         // Programmatically trigger a click on the submit button
//         submitButton.click();
//     }
// });

// Add an event listener to the button
submitBtn.addEventListener("click", () => {
    // Get the values from the input fields
    let parseAmount = parseInt(amountEl.value, 10);
    let parseDescription = descriptionEl.value;

    // Multiply Amount with 1000
    parseAmount = parseAmount * 1000;

    // Check if combining "Shopee Food - " and the user's input exceeds 50 characters
    if (parseDescription.length <= 35 - "SHOPEEFOOD".length) {
        parseDescription = `SHOPEEFOOD ${parseDescription}`;
    }

    // Limit parseDescription to a maximum of 35 characters
    if (parseDescription.length > 35) {
        parseDescription = parseDescription.substring(0, 35);
    }

    // Construct the URL
    const qrCodeApi = `https://img.vietqr.io/image/970423-28109943309-print.png?amount=${encodeURIComponent(parseAmount)}&addInfo=${encodeURIComponent(parseDescription)}&accountName=VO%20THE%20DUY`;

    // Create an image element to display the image
    const imageEl = document.createElement("img");
    imageEl.src = qrCodeApi;

    // Clear the previous image (if any) and append the new image
    imageCtn.innerHTML = "";
    imageCtn.appendChild(imageEl);

    // Show the image container (if an image is added)
    imageCtn.style.display = "block";
});