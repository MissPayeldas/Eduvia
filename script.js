// Smooth Scrolling for Semester Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation for Contact Us Page
document.getElementById('contactForm').addEventListener('submit', function(e) {
    let isValid = true;
    const name = document.getElementById('name').value;
    const contactNo = document.getElementById('contactNo').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;

    if (!name || !contactNo || !email || !comment) {
        isValid = false;
        alert("All fields are required!");
    }

    if (!isValid) {
        e.preventDefault(); // Prevent form submission if validation fails
    }
});

// Toggle Notes Visibility in Syllabus Page
document.querySelectorAll('.semester-header').forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
    });
});

// Function to handle the download of a document
function downloadDocument(subject) {
    const fileUrl = `docs/${subject}.pdf`; // Path where your PDFs are stored
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = `${subject}.pdf`; // Set the file name to download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up after download
}

        function toggleSyllabus(syllabusId) {
            // Get the syllabus element
            const syllabusElement = document.getElementById(syllabusId);
            // Toggle the display style
            if (syllabusElement.style.display === "none") {
                syllabusElement.style.display = "block"; // Show the syllabus
            } else {
                syllabusElement.style.display = "none"; // Hide the syllabus
            }
        }

        // login page
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const emailInput = document.getElementById("email").value;
    const errorMessage = document.getElementById("error-message");

    if (validateEmail(emailInput)) {
        // Redirect to the notes page
        window.location.href = "notes.html";
    } else {
        errorMessage.textContent = "Please enter a valid email ID.";
    }
});

// Function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

