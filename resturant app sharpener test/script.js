// Select elements
const form = document.getElementById("data");
const dishInput = document.getElementById("dish");
const amountInput = document.getElementById("amount");
const categorySelect = document.getElementById("category");

const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");

const apiUrl = "https://crudcrud.com/api/5e4be2bc7c1a4cde97236ad5f4e18c7c/restaurantApp";  // Your API URL

// Function to fetch and display data from the database
function fetchData() {
  axios.get(apiUrl)
    .then(response => {
      const orders = response.data;
      // Clear the current lists
      tab1.innerHTML = '';
      tab2.innerHTML = '';
      tab3.innerHTML = '';

      // Render the orders based on the table selection
      orders.forEach(order => {
        const li = document.createElement('li');
        li.textContent = `Description: ${order.dish} , Expense amount: ${order.amount} , Category: ${order.table}`;
        
        // Create a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deleteOrder(order._id);  // Use _id to delete the order
        
        li.appendChild(deleteBtn);
        
        // Append the order to the corresponding table list
        if (order.table === "table1") {
          tab1.appendChild(li);
        } else if (order.table === "table2") {
          tab2.appendChild(li);
        } else if (order.table === "table3") {
          tab3.appendChild(li);
        }
      });
    })
    .catch(error => {
      console.error("Error fetching data", error);
    });
}

// Function to add an order to the database
form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const orderData = {
    dish: dishInput.value,
    amount: amountInput.value,
    table: categorySelect.value
  };
  
  axios.post(apiUrl, orderData)
    .then(response => {
      // After adding, fetch and update the UI
      fetchData();
      
      // Clear input fields
      dishInput.value = "";
      amountInput.value = "";
    })
    .catch(error => {
      console.error("Error adding data", error);
    });
});

// Function to delete an order from the database
function deleteOrder(orderId) {
  axios.delete(`${apiUrl}/${orderId}`)
    .then(response => {
      // Fetch and update UI after deletion
      fetchData();
    })
    .catch(error => {
      console.error("Error deleting order", error);
    });
}

// Initial fetch to load data when page loads
window.onload = function () {
  fetchData();
};
