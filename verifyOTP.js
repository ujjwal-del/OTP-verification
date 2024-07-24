
const verifyOTPForm = document.getElementById('verifyOTPForm');

verifyOTPForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const otp = document.getElementById('otp').value;
  // Send a request to the server to verify the OTP
  fetch('/verify-otp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ otp })
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // If the OTP is valid, redirect the user to the next page
    if (data.valid) {
      window.location.href = 'nextPage.html';
    } else {
      // If the OTP is invalid, display an error message
      document.getElementById('error-message').innerHTML = 'Invalid OTP';
    }
  })
  .catch((error) => {
    console.error(error);
  });
});
