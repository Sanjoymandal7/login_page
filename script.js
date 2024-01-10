// Get the anchor tag element by its ID
const popupLink2 = document.getElementById('popupBtn2');
const loginBox = document.getElementById('login-box');


const popupLink1 = document.getElementById('popupBtn1');
const registerBox = document.getElementById('register-box');

// Function to show the popup
function showRegister() {
  console.log("showpopup runs 1");
  registerBox.style.display = 'block';
  loginBox.style.display = 'none';

//   popupLink.style.
}

function showLogin() {
  console.log("showpopup runs 2");
    loginBox.style.display = 'block';
    registerBox.style.display = 'none';

//   popupLink.style.
}

// Add a click event listener to the anchor tag
popupLink1.addEventListener('click', function(event) {
  // Prevent the default behavior of following the link
  event.preventDefault();
  
  // Call the function to show the popup
  showRegister();
});


// Add a click event listener to the anchor tag
popupLink2.addEventListener('click', function(event) {
  // Prevent the default behavior of following the link
  event.preventDefault();
  
  // Call the function to show the popup
  showLogin();
});
