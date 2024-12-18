// The form inside the index.html file is already provided by us. 
// Your task is to store all the user details as an object inside the local storage, 
// instead of storing them as individual fields. 

// NOTE: Make sure that when you are storing data in the local storage the key that you
//  use is "User Details". The key has to be "User Details" only then the test cases will 
//  pass.

function handleSubmitForm(event){
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    let userDetails = {
        username : username,
        email : email,
        phone : phone,
    };
    localStorage.setItem('User Details', JSON.stringify(userDetails));
    console.log(JSON.parse(localStorage.getItem("User Details")))
    displayLocalStorageData();
}

function displayLocalStorageData(){
    const output = document.getElementById('output');
    for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const list = document.createElement('li');
        list.textContent = (`${key} : ${value}`);
        output.appendChild(list);
    }
}

