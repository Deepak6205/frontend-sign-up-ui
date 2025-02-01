// API Base URL
const apiUrl = "https://crudcrud.com/api/c97bcae45c4040d18b72f8f2ed360b83/vegetableMarket"; // Replace your-api-key

const form = document.querySelector(".item-details");
const subContainer = document.querySelector(".sub-container");
const totalDisplay = document.querySelector("#total");

let totalItems = 0;

window.addEventListener("DOMContentLoaded", fetchItems);

// Form submission event
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const price = parseFloat(document.getElementById("price").value);
  const quantity = parseInt(document.getElementById("quantity").value);

  if (!name || isNaN(price) || isNaN(quantity)) {
    alert("Please fill all fields correctly!");
    return;
  }

  const itemData = { name, price, quantity };

  try {
    const response = await axios.post(apiUrl, itemData);
    addItemToUI(response.data);
    updateTotal(1);
    form.reset();
  } catch (error) {
    console.error("Error adding item:", error);
  }
});

async function fetchItems() {
  try {
    const response = await axios.get(apiUrl);
    subContainer.innerHTML = "";
    totalItems = 0;

    response.data.forEach((item) => {
      addItemToUI(item);
      updateTotal(1);
    });
  } catch (error) {
    console.error("Error fetching items:", error);
  }
}

function addItemToUI(item) {
  const itemList = document.querySelector(".item-list") || createItemList();

  const listItem = document.createElement("li");
  listItem.classList.add("item-entry");
  listItem.innerHTML = `
    <span>${item.name} - Rs.${item.price} - ${item.quantity}Kg</span>
    <input type="number" class="buy-input" placeholder="Quantity to buy" min="1" />
    <button class="buy-btn">Buy</button>
    <button class="delete-btn">Delete</button>
  `;

  itemList.appendChild(listItem);

  // Handle Buy button
  listItem.querySelector(".buy-btn").addEventListener("click", async () => {
    const buyInput = listItem.querySelector(".buy-input");
    const purchaseAmount = parseInt(buyInput.value);

    // Validate the purchase amount
    if (isNaN(purchaseAmount) || purchaseAmount <= 0 || purchaseAmount > item.quantity) {
      alert("Invalid purchase amount!");
      return;
    }

    const remainingQuantity = item.quantity - purchaseAmount;

    try {
      // Update the item in the UI with the new quantity
      item.quantity = remainingQuantity;
      listItem.querySelector("span").textContent = `${item.name} - Rs.${item.price} - ${item.quantity}Kg`;

      // Update the item in the database
      await axios.put(`${apiUrl}/${item._id}`, item);

      // Clear the input field
      buyInput.value = "";

      // Re-fetch the items to make sure the changes are applied and reflect the updated data
      fetchItems();

      console.log("Purchase successful!");
    } catch (error) {
      console.error("Error updating item:", error);
    }
  });

  // Handle Delete button
  listItem.querySelector(".delete-btn").addEventListener("click", async () => {
    try {
      // Delete the item from the database
      await axios.delete(`${apiUrl}/${item._id}`);

      // Remove the item from the UI
      itemList.removeChild(listItem);
      updateTotal(-1);

      // If no items left, remove the item list
      if (!itemList.children.length) {
        subContainer.removeChild(itemList);
      }

      console.log("Item deleted successfully!");
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  });
}

function createItemList() {
  const itemList = document.createElement("ul");
  itemList.classList.add("item-list");
  subContainer.appendChild(itemList);
  return itemList;
}

function updateTotal(change) {
  totalItems += change;
  totalDisplay.textContent = `Total Items: ${totalItems}`;
}