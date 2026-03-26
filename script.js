// ==========================================
// TASK 1: Javascript Slideshow
// ==========================================
let slideIndex = 0;
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    
    // Show the current slide
    if (slides.length > 0) {
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
}

// Initial call to start slideshow
showSlides();


// ==========================================
// TASK 2: jQuery slideToggle() for Events
// ==========================================
$(document).ready(function() {
    $(".show-more").click(function() {
        // "this" refers to the button clicked
        $(this).siblings(".extra-details").slideToggle();
        
        // Change text for better UX
        if ($(this).text() === "Show More") {
            $(this).text("Show Less");
        } else {
            $(this).text("Show More");
        }
    });
});


// ==========================================
// TASK 3: Registration Form Validation & Success
// ==========================================
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop page from refreshing

    // 1. Capture the values
    const adm = document.getElementById('adm').value.trim();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const successBox = $("#successMessage"); // jQuery selector for the message div

    // 2. Validation Logic
    // Task 3.iii: Validate for Admission Number, Name, and Email
    if (adm === "") {
        alert("Admission Number is required");
        return;
    }
    if (name === "") {
        alert("Name is required");
        return;
    }
    if (email === "" || !email.includes("@")) {
        alert("Please enter a valid Email address");
        return;
    }

    // 3. Success Message Logic
    // Task 3.iv: Show success message using jQuery fadeIn()
    successBox.hide(); // Reset if it was already showing
    successBox.text(`Success! ${name} (Adm: ${adm}) has been registered.`);
    successBox.fadeIn(1000); // Fades in over 1 second

    // 4. Reset the form
    this.reset();
});