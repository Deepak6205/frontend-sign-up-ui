// In this task you want to provide the user a facility that if 
// he adds an item to the list by mistake, 
// then he is able to remove it via a delete button.


// Deliverables:

// 1. The 'li' that you are appending to the unordered list, 
// make sure that it has a delete button.

// 2. When you click on that delete button, 
// then that particular user's details should be removed from the screen 
// and from the local storage.

function handleSubmitForm(e){
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    
    const userDetails = {
        username : username,
        email: email,
        phone : phone
    }

    const key = JSON.stringify(email);
    const value = JSON.stringify(userDetails);
    localStorage.setItem(key,value);
    console.log(JSON.parse(localStorage.getItem(key)));
    displayUser();
}

function displayUser(){
    const output = document.getElementById('output');
    const key = localStorage.key(localStorage.length-1);
    const value = localStorage.getItem(key);
    const list = document.createElement('li');
    list.textContent = (`${value}`);
    const button = document.createElement('button');
    button.textContent="delete";
    button.id = key;
    button.type = "delete";

    button.addEventListener('click', function(){
        // remove from localStorage
        localStorage.removeItem(button.id);
        // remove from ui
        list.remove();
    })
    list.appendChild(button);
    output.appendChild(list);
}

