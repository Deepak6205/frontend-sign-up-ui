// 1. Inside the first Div, after the main heading 
// add a sub-heading (h3 tag) "Buy high quality organic fruits online".

// 2. Make the sub-heading text italic.

const mainContainer = document.getElementById('main-heading');
const subHeading = document.createElement('h3');
subHeading.textContent="Buy high quality organic fruits online";
subHeading.style.fontStyle="italic";
mainContainer.appendChild(subHeading);

// Inside the second Div, before the unordered 

// list add a paragraph tag showing "Total fruits: 4".

// 3. On this paragraph tag set an id of "fruits-total".


const para = document.createElement('p');
para.textContent = "total fruits: 4";
para.id = "fruits-total";

const divs = document.getElementsByTagName('div');
const req = divs[1];
const lists = document.getElementById('fruits');

req.insertBefore(para,lists);