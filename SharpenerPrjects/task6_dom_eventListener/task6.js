// Deliverables:

// 1. In each "li" after the delete button
// add an edit button with class 'edit-btn'.
// Once you do this the output on the screen will look like this:

// 2. Now, implement the add and delete functionality
// just the way it is done in the video. There is only one difference
// that now the new 'li' element that you will create
// will have two buttons (delete and edit) instead of one button.

// Note:

//     You have to just add the edit button.
//     You do not have to implement the edit functionality.
//     Do not touch the html file.
//     To listen for form submission event use addEventListener.

// Push the code to GitHub.

const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const fruitsToAdd = document.getElementById("fruit-to-add");
  const newLi = document.createElement("li");

  newLi.innerHTML =
    fruitsToAdd.value +
    '<button class="delete-btn">x</button>' +
    '<button class="edit-btn">Edit</button>';
  //or

  //newLi.textContent = fruitsToAdd.value;
  // newLi.className="fruit";
  // const deleteBtn = document.createElement('button');
  // deleteBtn.textContent = 'x';
  // deleteBtn.className="delete-btn";
  // newLi.appendChild(deleteBtn);
  // const editBtn = document.createElement('button');
  // editBtn.textContent = "Edit";
  // editBtn.className = "edit-btn";
  // newLi.appendChild(editBtn);
  fruits.appendChild(newLi);
});

fruits.addEventListener('click',function(event){
    if(event.target.classList.contains('delete-btn')){
        const remove = event.target.parentElement;
        fruits.removeChild(remove);
    }
})

const lists = document.querySelectorAll(".fruits li");

for (let i = 0; i < lists.length; i++) {
  const edit = document.createElement("button");
  edit.textContent = "Edit";
  edit.className = "edit-btn";

  lists[i].appendChild(edit);
}
