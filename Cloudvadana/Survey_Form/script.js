document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('survey-form');
    const popup = document.getElementById('popup');
    const closePopupBtn = document.getElementById('close-popup');
    const formDataContainer = document.getElementById('form-data');
    const submitBtn = document.getElementById('submit-btn');
    const resetBtn = document.getElementById('reset-btn');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const dob = document.getElementById('dob').value;
        const country = document.getElementById('country').value;
        const gender = document.querySelectorAll('input[name="gender"]:checked');
        const profession = document.getElementById('profession').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;

        if (gender.length === 0) {
            alert('Please select at least one gender.');
            return;
        }

        // Display the form data in the popup
        formDataContainer.innerHTML = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${[...gender].map(g => g.value).join(', ')}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
        `;

        // Show the popup
        popup.style.display = 'block';
    });

    closePopupBtn.addEventListener('click', function () {
        // Close the popup
        popup.style.display = 'none';

        // Reset the form
        form.reset();
    });

    resetBtn.addEventListener('click', function () {
        // Reset the form
        form.reset();
    });
});
