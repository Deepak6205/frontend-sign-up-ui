// In this task you want to provide the user a facility that 
// if has misspelled some information, then he is able to correct it via an edit button.


// Deliverables:

// 1. Make sure that after form submission all the input fields are empty again.

// 2. Inside the 'li' add an edit button after the delete button.

// 3. When you click on this edit button, the user details
//  should be removed from the screen and from the local storage and
//   should populate the input fields with the existing values.

function handleSubmitForm(e){
    e.preventDefault();

    const username = e.target.username.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;

    const userDetails = {
        username: username,
        email: email,
        phone: phone
    }

    const key = JSON.stringify(email);
    const value = JSON.stringify(userDetails);
    localStorage.setItem(key,value);
    e.target.username.value = '';
    e.target.email.value = '';
    e.target.phone.value = '';
    console.log(JSON.parse(localStorage.getItem(key)));
    displayUsers();
}

function displayUsers() {
    const output = document.getElementById('output');
    output.innerHTML = ''; // Clear previous list to avoid duplicate entries

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        const list = document.createElement('li');
        list.textContent = (`${key}  ${value}`);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'delete';
        deleteButton.type = 'button';
        deleteButton.id = key;

        const editButton = document.createElement('button');
        editButton.textContent = 'edit';
        editButton.id = key;
        editButton.type = 'button';

        // **Delete Functionality**
        deleteButton.addEventListener('click', function () {
            localStorage.removeItem(deleteButton.id);
            list.remove();
        });

        // **Edit Functionality**
        editButton.addEventListener('click', function () {
            const userData = JSON.parse(localStorage.getItem(editButton.id));
            if (userData) {
                const username = document.getElementById('username');
                const email = document.getElementById('email');
                const phone = document.getElementById('phone');

                username.value = userData.username;
                email.value = userData.email;
                phone.value = userData.phone;

                localStorage.removeItem(editButton.id);
                list.remove();
            }
        });

        list.appendChild(deleteButton);
        list.appendChild(editButton);
        output.appendChild(list);
    }
}
