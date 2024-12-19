// ou were able to store single user's details in the local storage.
// But this is not scalable. Every time you add a new user,
// the older user gets removed. Try to solve this problem in this task.

// Deliverable

// 1. Make sure that you are able to store the details of multiple users in
// the local storage.

// 2. Add an unordered list in the html file after the form.

// 3. Use DOM manipulation to display on screen the users you add as
// a list item of this unordered list.

function handleSubmitForm(e) {
  e.preventDefault();

  const username = e.target.username.value;
  const email = e.target.email.value;
  const phone = e.target.phone.value;

  const userDetails = {
    username: username,
    email: email,
    phone: phone,
  };
   // -> according to the question 
  // jo first paragraph mai hai huhme ye karna tha 
  // but according to the video ye nahi karna hai
  //      👇        
  //localStorage.clear(); 

  

  const key = JSON.stringify(email);
  const value = JSON.stringify(userDetails);
  localStorage.setItem(key, value);

  console.log(JSON.parse(localStorage.getItem(key)));
  displayLocalStorageData();
}
function displayLocalStorageData() {
  const output = document.getElementById("output");
  // Get the key of the most recently added item
  const key = localStorage.key(localStorage.length - 1);
  const value = localStorage.getItem(key); // Get value of the last added key

  // Create and display the new list item for the latest data only
  const list = document.createElement("li");
  list.textContent = `${value}`;
  output.appendChild(list);
}
