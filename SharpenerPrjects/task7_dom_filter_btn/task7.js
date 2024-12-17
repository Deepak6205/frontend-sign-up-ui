// 1. Use DOM Manipulation to add another input element inside form,
//  before the button. This input element will take the description of the fruit.

// 2. Use DOM Manipulation to show the fruit description (in italics)
// on screen alongwith the fruit name. This description should be shown in the next line
// (HINT: To show description on next line you can make use of the paragraph tag).

// 3. Now, create a filter that shows only those fruits whose either
//  name or description or both matches the entered text.

// Note: The input element that you will create using
// DOM manipulation to collect the description of fruit, must
//  be given an id “description”.

// 1. Add an input field for the description before the button
const form = document.querySelector("form");
const descriptionInput = document.createElement("input");
descriptionInput.type = "text";
descriptionInput.id = "description";
descriptionInput.placeholder = "Enter fruit description";

// Insert the description input before the submit button
const button = form.querySelector("button");
form.insertBefore(descriptionInput, button);

//2. Add description to the existing list item
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const fruitNameInput = document.getElementById("fruit-to-add");
  const fruitName = fruitNameInput.value.trim();
  const description = descriptionInput.value.trim();

  if (fruitName !== "" && description !== "") {
    const fruitList = document.querySelector(".fruits");
    const existingFruits = Array.from(fruitList.children).find(
      (item) =>
        item.firstChild.textContent.trim().toLowerCase() ===
        fruitName.toLowerCase()
    );
    if(existingFruits){
      let descriptionElement = existingFruits.querySelector('p');
      if(!descriptionElement){
        descriptionElement = document.createElement('p');
        descriptionElement.style.fontStyle = 'italic';
        descriptionElement.style.margin = '0';
        existingFruits.appendChild(descriptionElement);
      }
      descriptionElement.textContent = description;
    }else{
      alert(`fruits ${fruitName} is not found in the fruitList`);
    }
    // Clear input fields
    fruitName.value='';
    description.value='';
  }
});
// filter fruits wit name or either description

const filter = document.getElementById('filter');
filter.addEventListener('keyup', function(event){
  const inputValue = event.target.value.toLowerCase();
  const list = document.getElementsByClassName('fruit');
  for(let i = 0; i < list.length; i++){
    const currentTextEntered = list[i].firstChild.textContent.toLowerCase();
    const descriptionValue = list[i].lastChild.textContent.toLowerCase();
    if(currentTextEntered.indexOf(inputValue) !== -1 || descriptionValue.indexOf(inputValue) !== -1) {
      list[i].style.display = 'flex';
    } else {
      list[i].style.display = 'none';
    }
  }
})

