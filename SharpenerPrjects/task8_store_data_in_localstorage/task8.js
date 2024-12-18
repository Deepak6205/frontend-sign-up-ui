// Deliverables:

// 1. In the html file create a form with 3 input fields:
//  one for collecting username, second for collecting email, and
//   third for collecting phone number.

// 2. Make sure you use label tag for each of these input fields.

// 3. The form should have a button of submit type.

// 4. On form submission collect the user details 
// mentioned above and then store them in the browser's local storage.


// Note:

//     Input elements should be given “name” attribute with values: 

//     “username” for Username input
//     “email” for Email input, and
//     “phone” for Phone input

//     While storing data in the local storage the key for storing:

//     Username Input should be "Username"
//     Email Input should be "Email"
//     Phone Input should be "Phone"



function submitForm(e){
    e.preventDefault();
    const name = document.getElementById('username');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    
    localStorage.setItem('Username',name.value);
    localStorage.setItem('Email', email.value);
    localStorage.setItem('Phone', phone.value);
    
};

function displayLocalStorage() {
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = ''; // Clear previous output

    // Loop through all the keys in localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i); // Get key name
      const value = localStorage.getItem(key); // Get value of the key

      // Display the key-value pair on the page
      const newData = document.createElement('p');
      newData.textContent = `${key}: ${value}`;
      outputElement.appendChild(newData);
    }
  }