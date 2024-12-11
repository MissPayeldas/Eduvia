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

// Registration Form Validation
document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username && email && password) {
    alert("Registration successful!");
    } else {
    alert("Please fill in all fields.");
    }
});

  // Login Form Validation
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    if (loginUsername && loginPassword) {
    alert("Login successful!");
    } else {
    alert("Please fill in both fields.");
    }
});
