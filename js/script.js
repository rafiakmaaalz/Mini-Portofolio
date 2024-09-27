// Prompt for user name and replace it in the header
function replaceName() {
    const name = prompt("What is your name?", "");
    if (name) {
        document.getElementById("user").innerText = name;
    }
}

// Slideshow functionality
let slideIndex = 1;
let slideTimer;

function showSlides(n) {
    clearTimeout(slideTimer);
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    for (let dot of dots) {
        dot.className = dot.className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    slideTimer = setTimeout(() => { showSlides(slideIndex += 1); }, 5000);
}

function plusSlides(n) {
    clearTimeout(slideTimer);
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    clearTimeout(slideTimer);
    showSlides(slideIndex = n);
}

// Form submission handler
function result() {
    const nama = document.getElementById("nama").value.trim();
    const tglLhr = document.getElementById("tanggal-lahir").value;
    const genderElems = document.getElementsByName("gender");
    const pesan = document.getElementById("pesan").value.trim();

    let gender = "";
    for (let elem of genderElems) {
        if (elem.checked) {
            gender = elem.value;
            break;
        }
    }

    // Validation checks
    if (!nama) {
        alert("Please enter your name.");
        document.getElementById("nama").focus();
        return false;
    }

    if (!tglLhr) {
        alert("Please select your date of birth.");
        document.getElementById("tanggal-lahir").focus();
        return false;
    }

    if (!gender) {
        alert("Please select your gender.");
        return false;
    }

    if (!pesan) {
        alert("Please enter your message.");
        document.getElementById("pesan").focus();
        return false;
    }

    // Additional validation for message length
    if (pesan.length < 10) {
        alert("Your message should be at least 10 characters long.");
        document.getElementById("pesan").focus();
        return false;
    }

    const now = new Date();
    const timeString = now.toLocaleString();

    // Display the results
    document.getElementById("time").innerText = timeString;
    document.getElementById("result-nama").innerText = nama;
    document.getElementById("result-tgl-lhr").innerText = tglLhr;
    document.getElementById("result-gender").innerText = gender;
    document.getElementById("result-pesan").innerText = pesan;

    // Clear the form
    document.getElementById("contactForm").reset();

    alert("Thank you for your message!");

    return false; // Prevent form submission
}

// Initialize functions on page load
window.onload = function () {
    replaceName();
    showSlides(slideIndex);
};

