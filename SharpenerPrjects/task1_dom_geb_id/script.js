/* Change the main heading 'Fruit Shop' to 'Fruit World'

2. Change the font color of 'Fruit World' from black to orange

3. Change background color of div with id = "header" to green color

4. Add a bottom border of orange color to div with id = "header"

5. Change the font color of 'Fruits In Basket' from black to green

6. Introduce a paragraph element with text "Please visit us again" inside the div with id = "thanks" */

const header = document.getElementById('main-heading');
const list = document.getElementById('items');
const container = document.getElementById('header');
const second = document.getElementById('desc');
const para = document.getElementById('thanks');
//header.innerHTML= "Fruits World !";  //or niche wala

header.textContent = "Fruits World !";

header.style.color = "orange";
container.style.backgroundColor="green";
container.style.borderBottom= "3px solid orange";

second.style.color = "green";


const line = document.createElement('p');
const text = document.createTextNode('please visit again');
line.appendChild(text);
para.appendChild(line);
// or
//para.innerHTML = '<p>Please visit us again</p>';
