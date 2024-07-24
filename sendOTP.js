const sendOTPForm = document.getElementById('sendOTPForm');

sendOTPForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  // Send a request to the server to send an OTP to the user's email address
  fetch('/send-otp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Redirect the user to the verify OTP page
    window.location.href = 'verifyOTP.html';
  })
  .catch((error) => {
    console.error(error);
  });
});